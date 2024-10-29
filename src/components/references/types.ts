type State = {
  references: string;
};

type Action = {
  updateReferences: (description: State["references"]) => void;
};

export { type State as ReferencesState, type Action as ReferencesAction };
