interface State {
  education: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Action {
  updateEducation: (education: State["education"]) => void;
  updateSchool: (school: State["school"]) => void;
  updateStartDate: (startDate: State["startDate"]) => void;
  updateEndDate: (endDate: State["endDate"]) => void;
  updateDescription: (description: State["description"]) => void;
}

export { type State as EducationState, type Action as EducationAction };
