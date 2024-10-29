type State = {
  skills: string;
};

type Action = {
  updateSkills: (description: State["skills"]) => void;
};

export { type State as SkillsState, type Action as SkillsAction };
