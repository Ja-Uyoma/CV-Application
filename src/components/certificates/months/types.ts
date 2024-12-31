type State = {
  month: string;
};

type Action = {
  updateMonth: (month: State["month"]) => void;
};

export { type Action as MonthAction, type State as MonthState };
