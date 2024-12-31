type State = {
  certificate: string;
  description: string;
};

type Action = {
  updateCertificate: (certificate: State["certificate"]) => void;
  updateDescription: (description: State["description"]) => void;
};

export { type Action as CertificateAction, type State as CertificateState };
