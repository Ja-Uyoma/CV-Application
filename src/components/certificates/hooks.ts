import { create } from "zustand";
import { CertificateAction, CertificateState } from "./types";

const useStore = create<CertificateState & CertificateAction>()((set) => ({
  certificate: "",
  description: "",
  updateCertificate: (cert) => set(() => ({ certificate: cert })),
  updateDescription: (desc) => set(() => ({ description: desc })),
}));

export { useStore as useCertificateStore };
