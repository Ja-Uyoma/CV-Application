type State = {
  year: string;
};

type Action = {
  updateYear: (year: State["year"]) => void;
};

export { type State as YearsState, type Action as YearsAction };
