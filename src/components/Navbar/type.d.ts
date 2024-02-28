export type HeaderProps = {
  title: string;
};

export type HeaderItem = {
  label: string;
  route: string;
};

export const HEADER_ITEMS: Array<HeaderItem> = [
  {
    label: 'test',
    route: 'tests',
  },
];
