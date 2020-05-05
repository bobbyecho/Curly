import React from 'react';
import { View, Text, Container, Divider } from '@ui';
import { StyleSheet, Clipboard, ToastAndroid } from 'react-native';
import metrics from '@ui/themes/metrics';
import colors from '@ui/themes/colors';
import type { MainStackList } from '@navigations/MainStack';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DetailItem from './DetailItem';
import { RouteProp } from '@react-navigation/native';
import { formatDate, moneyConverter } from '@helpers/transforms';

interface IDetailTransaction {
  navigation: StackNavigationProp<MainStackList>;
  route: RouteProp<MainStackList, 'DetailTransaction'>;
}

function DetailTransaction(props: IDetailTransaction) {
  const {
    navigation,
    route: { params }
  } = props;

  async function copyToClipboard(str: string) {
    await Clipboard.setString(str);
    ToastAndroid.show(`${str} copied to clipboard!`, 1000);
  }
  return (
    <Container>
      <View backgroundColor={colors.white}>
        <View row verticalCenter>
          <Text style={styles.title}>ID TRANSAKSI: #{params.id}</Text>
          <Icon
            name="description"
            style={styles.clipboard}
            onPress={() => copyToClipboard(params.id)}
          />
        </View>
        <View style={styles.headerAction}>
          <Text style={styles.title}>DETAIL TRANSAKSI</Text>
          <Text style={styles.textClose} onPress={() => navigation.goBack()}>
            Tutup
          </Text>
        </View>
        <Divider />
        <View row verticalCenter>
          <Text style={styles.title}>{params.sender_bank.toUpperCase()}</Text>
          <Icon name="arrow-forward" style={styles.iconForward} />
          <Text style={styles.title}>
            {params.beneficiary_bank.toUpperCase()}
          </Text>
        </View>
        <DetailItem
          title={params.beneficiary_name}
          subtitle={params.account_number}
        />
        <DetailItem
          title="nominal"
          subtitle={moneyConverter(Number(params.amount))}
        />
        <DetailItem title="berita transfer" subtitle={params.remark} />
        <DetailItem
          title="kode unik"
          subtitle={params.unique_code.toString()}
        />
        <DetailItem
          title="waktu dibuat"
          subtitle={formatDate(params.created_at)}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  headerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textClose: {
    color: colors.warning,
    fontSize: 15
  },
  desc: {
    fontSize: 15
  },
  iconForward: {
    fontSize: 20,
    marginHorizontal: metrics.distance.s,
    marginTop: 2
  },
  clipboard: {
    color: colors.warning,
    fontSize: 22,
    marginLeft: metrics.distance.s
  }
});

export default DetailTransaction;
