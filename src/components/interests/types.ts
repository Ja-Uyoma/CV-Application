type State = {
  interests: string;
};

type Action = {
  updateInterests: (description: State["interests"]) => void;
};

export { type State as InterestsState, type Action as InterestsAction };
