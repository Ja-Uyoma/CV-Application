import { create } from "zustand";
import { PersonalDetailsAction, PersonalDetailsState } from "./types";

export const useStore = create<PersonalDetailsState & PersonalDetailsAction>()(
  (set) => ({
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
    updatePhoneNumber: (phoneNumber) =>
      set(() => ({ phoneNumber: phoneNumber })),
    updateAddress: (addr) => set(() => ({ address: addr })),
    updatePostCode: (postCode) => set(() => ({ postCode: postCode })),
    updateCity: (city) => set(() => ({ city: city })),
  })
);
