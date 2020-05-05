import React from 'react';
import { Chip } from '@ui';
import { StyleSheet } from 'react-native';
import colors from '@themes/colors';
import metrics from '@ui/themes/metrics';

interface IStatusChip {
  status: boolean;
}

const styles = StyleSheet.create({
  default: {
    borderRadius: metrics.radius.chip
  },
  success: {
    backgroundColor: colors.success
  },
  pending: {
    borderColor: colors.warning,
    borderWidth: 1
  }
});

const textStyles = StyleSheet.create({
  success: {
    color: colors.white
  },
  pending: {
    color: colors.warning
  }
});

function StatusChip(props: IStatusChip) {
  const { status } = props;
  function renderStatusText(): string {
    return status === true ? 'Berhasil' : 'Pengecekan';
  }

  function getStyle() {
    return status === true ? 'success' : 'pending';
  }

  return (
    <Chip
      mode={'outlined'}
      style={[styles.default, styles[getStyle()]]}
      textStyle={textStyles[getStyle()]}>
      {renderStatusText()}
    </Chip>
  );
}

export default StatusChip;
