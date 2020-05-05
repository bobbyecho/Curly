/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StatusChip, RippleTouch } from '@ui';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import colors from '@ui/themes/colors';
import metrics from '@ui/themes/metrics';
import { formatDate, moneyConverter } from '@helpers/transforms';

export type transactionData = {
  id: string;
  sender_bank: string;
  beneficiary_bank: string;
  beneficiary_name: string;
  amount: number | string;
  created_at: string;
  completed_at: string;
  status: string;
  account_number: string;
  unique_code: number;
  fee: number;
  remark: string;
};

export interface ITransactionCard {
  transactionData: transactionData;
}

function TransactionCard(props: ITransactionCard) {
  const {
    transactionData: {
      id,
      beneficiary_name,
      beneficiary_bank,
      sender_bank,
      amount,
      unique_code,
      created_at,
      remark,
      account_number,
      status
    }
  } = props;
  const navigation = useNavigation();

  function getColorDecoration() {
    const colorType = status === 'SUCCESS' ? 'success' : 'warning';
    return {
      backgroundColor: colors[colorType],
      borderColor: colors[colorType]
    };
  }

  function navigateToDetail() {
    navigation.navigate('DetailTransaction', {
      id,
      beneficiary_name,
      beneficiary_bank,
      sender_bank,
      amount,
      unique_code,
      created_at,
      remark,
      account_number
    });
  }

  return (
    <RippleTouch onPress={navigateToDetail}>
      <View size="plain" row style={styles.containerItem}>
        <View
          size="plain"
          width="3%"
          style={[getColorDecoration(), styles.itemDecoration]}
        />
        <View row flex width="97%" backgroundColor={colors.white}>
          <View flex size="plain" justifyContent="space-around">
            <View size="plain" row verticalCenter style={styles.subItemLeft}>
              <Text style={styles.title}>{sender_bank.toUpperCase()}</Text>
              <Icon name="arrow-forward" style={styles.iconForward} />
              <Text style={styles.title}>{beneficiary_bank.toUpperCase()}</Text>
            </View>
            <Text style={styles.desc}>{beneficiary_name}</Text>
            <View size="plain" row verticalCenter style={styles.subItemLeft}>
              <Text style={styles.desc}>{moneyConverter(Number(amount))}</Text>
              <View style={styles.iconBulletSeparator} />
              <Text style={styles.desc}>{formatDate(created_at)}</Text>
            </View>
          </View>
          <View size="plain" justifyContent="center">
            <StatusChip status={status === 'SUCCESS'} />
          </View>
        </View>
      </View>
    </RippleTouch>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginVertical: metrics.distance.xs
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 15
  },
  subItemLeft: {
    marginVertical: 4
  },
  itemDecoration: {
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  iconForward: {
    fontSize: 20,
    marginHorizontal: metrics.distance.s,
    marginTop: 2
  },
  iconBulletSeparator: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 15,
    marginHorizontal: 8
  }
});

export default TransactionCard;
