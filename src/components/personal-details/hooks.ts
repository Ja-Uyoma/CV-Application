import { create } from "zustand";

export type State = {
  givenName: string;
  familyName: string;
  headline: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  postCode: string;
  city: string;
};

type Action = {
  updateGivenName: (givenName: State["givenName"]) => void;
  updateFamilyName: (familyName: State["familyName"]) => void;
  updateHeadline: (headline: State["headline"]) => void;
  updateEmail: (email: State["emailAddress"]) => void;
  updatePhoneNumber: (phoneNumber: State["phoneNumber"]) => void;
  updateAddress: (addr: State["address"]) => void;
  updatePostCode: (postCode: State["postCode"]) => void;
  updateCity: (city: State["city"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  givenName: "",
  familyName: "",
  headline: "",
  emailAddress: "",
  phoneNumber: "",
  address: "",
  postCode: "",
  city: "",
  updateGivenName: (givenName) => set(() => ({ givenName: givenName })),
  updateFamilyName: (familyName) => set(() => ({ familyName: familyName })),
  updateHeadline: (headline) => set(() => ({ headline: headline })),
  updateEmail: (email) => set(() => ({ emailAddress: email })),
  updatePhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
  updateAddress: (addr) => set(() => ({ address: addr })),
  updatePostCode: (postCode) => set(() => ({ postCode: postCode })),
  updateCity: (city) => set(() => ({ city: city })),
}));
