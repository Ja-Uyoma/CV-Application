import { useForm } from "react-hook-form";
import { PersonalDetailsData } from "../types/PersonalDetails";
import { useEffect } from "react";
import { create } from "zustand";

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

const useStore = create<State & Action>((set) => ({
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

function PersonalDetails(props: {
  setDetails: (details: PersonalDetailsData) => void;
}) {
  const { register, watch } = useForm<PersonalDetailsData>();

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      props.setDetails(value as PersonalDetailsData);
    });

    return () => unsubscribe();
  }, [watch]);

  return (
    <details
      name="resume"
      className="bg-primary-content rounded-none space-y-2 cursor-pointer pb-3"
    >
      <summary className="list-none my-4 flex items-center justify-between">
        <span className="inline-block font-bold text-xl">Personal details</span>
        <button className="inline-block">
          <span className="material-symbols-outlined size-full">
            add_circle
          </span>
        </button>
      </summary>

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
                {...register("givenName", { required: true })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>

            <label className="block w-full">
              <span className="font-medium">Family Name</span>
              <input
                type="text"
                {...register("familyName", { required: true })}
                autoComplete="on"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <label className="block w-full">
            <span className="font-medium">Headline</span>
            <input
              type="text"
              {...register("headline", { required: true })}
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
              {...register("emailAddress", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">Phone Number</span>
            <input
              type="text"
              {...register("phoneNumber", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <label className="block w-full">
          <span className="font-medium">Address</span>
          <input
            type="text"
            {...register("address", { required: true })}
            autoComplete="on"
            className="bg-gray-100 rounded-lg border-none w-full"
          />
        </label>

        <div className="flex gap-2">
          <label className="block w-full">
            <span className="font-medium">Post code</span>
            <input
              type="text"
              {...register("postCode", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>

          <label className="block w-full">
            <span className="font-medium">City</span>
            <input
              type="text"
              {...register("city", { required: true })}
              autoComplete="on"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>
      </form>
    </details>
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
