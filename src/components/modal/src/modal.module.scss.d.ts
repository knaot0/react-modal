export type Styles = {
  '--hidden': string;
  'content': string;
  'overlay': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
