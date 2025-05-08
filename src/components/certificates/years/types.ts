interface State {
  year: string;
}

interface Action {
  updateYear: (year: State["year"]) => void;
}

export { type State as YearsState, type Action as YearsAction };
