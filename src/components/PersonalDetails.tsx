import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import { Summary } from "./Summary";
import { Details } from "./details/details";

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

const useStore = create<State & Action>()((set) => ({
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

function PersonalDetails() {
  const { register } = useForm<State>();

  const updateGivenName = useStore((state) => state.updateGivenName);
  const updateFamilyName = useStore((state) => state.updateFamilyName);
  const updateHeadline = useStore((state) => state.updateHeadline);
  const updateEmail = useStore((state) => state.updateEmail);
  const updatePhoneNumber = useStore((state) => state.updatePhoneNumber);
  const updateAddress = useStore((state) => state.updateAddress);
  const updatePostCode = useStore((state) => state.updatePostCode);
  const updateCity = useStore((state) => state.updateCity);

  return (
    <Details name="resume">
      <Summary title="Personal Details" />

      <form
        action="/"
        method="post"
        autoComplete="off"
        className="rounded-lg space-y-2"
      >
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between gap-2">
            <label className="block w-full">
              <span className="font-medium">Given Name</span>
              <input
                type="text"
                {...register("givenName", {
                  required: true,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    updateGivenName(e.target.value),
                })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>

            <label className="block w-full">
              <span className="font-medium">Family Name</span>
              <input
                type="text"
                {...register("familyName", {
                  required: true,
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    updateFamilyName(e.target.value),
                })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="font-medium">Headline</span>
            <input
              type="text"
              {...register("headline", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateHeadline(e.target.value),
              })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <div className="flex justify-between gap-2">
          <label className="block w-full">
            <span className="font-medium">Email Address</span>
            <input
              type="email"
              {...register("emailAddress", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateEmail(e.target.value),
              })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">Phone Number</span>
            <input
              type="text"
              {...register("phoneNumber", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updatePhoneNumber(e.target.value),
              })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Address</span>
          <input
            type="text"
            {...register("address", {
              required: true,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                updateAddress(e.target.value),
            })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Post code</span>
            <input
              type="text"
              {...register("postCode", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updatePostCode(e.target.value),
              })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">City</span>
            <input
              type="text"
              {...register("city", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  updateCity(e.target.value),
              })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>
      </form>
    </Details>
  );
}

function PersonalDetailsPreview() {
  const givenName = useStore((state) => state.givenName);
  const familyName = useStore((state) => state.familyName);
  const headline = useStore((state) => state.headline);
  const emailAddress = useStore((state) => state.emailAddress);
  const phoneNumber = useStore((state) => state.phoneNumber);
  const address = useStore((state) => state.address);
  const postCode = useStore((state) => state.postCode);
  const city = useStore((state) => state.city);

  return (
    <>
      <p>{givenName}</p>
      <p>{familyName}</p>
      <p>{headline}</p>
      <p>{emailAddress}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{postCode}</p>
      <p>{city}</p>
    </>
  );
}

export { PersonalDetails, PersonalDetailsPreview };
