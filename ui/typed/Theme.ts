import { Theme as PaperTheme } from 'react-native-paper';

type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

export type PartialTheme = DeepPartial<PaperTheme>;
