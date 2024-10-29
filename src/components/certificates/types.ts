export type State = {
  certificate: string;
  description: string;
};

export type Action = {
  updateCertificate: (certificate: State["certificate"]) => void;
  updateDescription: (description: State["description"]) => void;
};
