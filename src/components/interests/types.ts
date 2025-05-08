interface State {
  interests: string;
}

interface Action {
  updateInterests: (description: State["interests"]) => void;
}

export { type State as InterestsState, type Action as InterestsAction };
