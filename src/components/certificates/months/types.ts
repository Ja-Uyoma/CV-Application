export type State = {
  month: string;
};

export type Action = {
  updateMonth: (month: State["month"]) => void;
};
