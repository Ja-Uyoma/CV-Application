interface State {
  qualifications: string;
}

interface Action {
  updateQualifications: (description: State["qualifications"]) => void;
}

export {
  type State as QualificationsState,
  type Action as QualificationsAction,
};
