interface State {
  references: string;
}

interface Action {
  updateReferences: (description: State["references"]) => void;
}

export { type State as ReferencesState, type Action as ReferencesAction };
