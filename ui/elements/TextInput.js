import React from 'react';
import { TextInput } from 'react-native-paper';
import theme from '../themes/default';

const textInputTheme = theme.TextInput;

function CustomTextInput(props) {
  const { style } = props;
  return (
    <TextInput
      mode="outlined"
      {...props}
      theme={textInputTheme.themeOverride}
      style={[textInputTheme.styles.default, style]}
    />
  );
}

export default CustomTextInput;
