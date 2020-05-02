import { ViewStyle, StyleProp, TextStyle } from 'react-native';
export default interface IButton {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  /**
   * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
   */
  dark?: boolean | undefined;
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean | undefined;
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string | undefined;
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean | undefined;
  /**
   * Icon to display for the `Button`.
   */
  icon?:
    | string
    | number
    | import('react-native').ImageURISource
    | import('react-native').ImageURISource[]
    | Readonly<{
        source:
          | string
          | number
          | import('react-native').ImageURISource
          | import('react-native').ImageURISource[];
        direction: 'rtl' | 'ltr' | 'auto';
      }>
    | ((
        props: {
          size: number;
          allowFontScaling?: boolean | undefined;
        } & {
          color: string;
        }
      ) => React.ReactNode)
    | undefined;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean | undefined;
  /**
   * Label text of the button.
   */
  children: React.ReactNode;
  /**
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean | undefined;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string | undefined;
  /**
   * Function to execute on press.
   */
  onPress?: (() => void) | undefined;
  /**
   * Style of button's inner content.
   * Use this prop to apply custom height and width.
   */
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the button text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * testID to be used on tests.
   */
  testID?: string | undefined;
}
