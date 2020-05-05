import React from 'react';
import { View, Text, RippleTouch, RadioButton } from '@ui';
import { StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Searchbar, Portal, Dialog } from 'react-native-paper';
import { PartialTheme } from '@ui/typed/Theme';
import metrics from '@themes/metrics';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '@themes/colors';

const overrideTheme: PartialTheme = {
  colors: {
    primary: colors.black,
    text: colors.black
  }
};

const styles = StyleSheet.create({
  default: {
    width: '80%',
    borderColor: 'transparent',
    shadowColor: 'transparent',
    borderRadius: metrics.radius.textInputRadius,
    elevation: 0,
    paddingVertical: metrics.distance.s,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  filterIcon: {
    backgroundColor: '#ff7f50',
    color: '#ffffff',
    padding: 8,
    borderRadius: 20
  },
  backgroundFilterIcon: {
    width: '20%',
    backgroundColor: '#ffffff',
    borderRadius: metrics.radius.commonRadius
  }
});

const inputStyles = StyleSheet.create({
  default: {
    fontSize: 17
  }
});

const sortingItem = [
  {
    title: 'Nama A-Z',
    value: 'beneficiary_name asc'
  },
  {
    title: 'Nama Z-A',
    value: 'beneficiary_name desc'
  },
  {
    title: 'Tanggal Terbaru',
    value: 'created_at desc'
  },
  {
    title: 'Tanggal Terlama',
    value: 'created_at asc'
  }
];

interface ISearchbar {
  onSearch(t: string): void;
  onFilter(t: string): void;
  style: StyleProp<ViewStyle>;
  inputStyle: StyleProp<TextStyle>;
}

function CustomSearchbar(props: ISearchbar) {
  const { onSearch, onFilter, style, inputStyle } = props;
  const [text, setText] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('beneficiary_name asc');

  function toggleModal() {
    setVisible(!visible);
  }

  function onChangeText(value: string) {
    setText(value);
    setTimeout(() => {
      onSearch(value);
    }, 0);
  }

  function onFilterSelected(value: string) {
    setSortBy(value);
    onFilter(value);
    setTimeout(() => {
      toggleModal();
    }, 300);
  }

  return (
    <View size="plain" row>
      <Searchbar
        placeholder="Search"
        value={text}
        onChangeText={onChangeText}
        inputStyle={[inputStyles.default, inputStyle]}
        style={[styles.default, style]}
        theme={overrideTheme}
        iconColor={colors.black}
      />
      <View style={styles.backgroundFilterIcon} verticalCenter>
        <RippleTouch onPress={toggleModal} borderless>
          <Icon
            name="filter-list"
            size={24}
            color="#ff7f50"
            style={styles.filterIcon}
          />
        </RippleTouch>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={toggleModal}>
          <Dialog.Title>Urutkan</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              onValueChange={onFilterSelected}
              value={sortBy.toString()}>
              {sortingItem.map((v) => (
                <View key={v.value} size="small" row verticalCenter>
                  <RadioButton value={v.value.toString()} />
                  <Text>{v.title}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

export default CustomSearchbar;
