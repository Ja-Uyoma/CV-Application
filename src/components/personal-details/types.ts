type State = {
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

export {
  type State as PersonalDetailsState,
  type Action as PersonalDetailsAction,
};
