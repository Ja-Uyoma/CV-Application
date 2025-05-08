interface State {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Action {
  updatePosition: (position: State["position"]) => void;
  updateEmployer: (employer: State["employer"]) => void;
  updateStartDate: (sdate: State["startDate"]) => void;
  updateEndDate: (edate: State["endDate"]) => void;
  updateDescription: (desc: State["description"]) => void;
}

export { type State as EmploymentState, type Action as EmploymentAction };
