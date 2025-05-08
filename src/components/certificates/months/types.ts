interface State {
  month: string;
}

interface Action {
  updateMonth: (month: State["month"]) => void;
}

export { type Action as MonthAction, type State as MonthState };
