import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Summary } from "../details/summary";
import { Details } from "../details/details";
import { useStore } from "./hooks";
import { PersonalDetailsState } from "./types";

function PersonalDetails() {
  const { register } = useForm<PersonalDetailsState>();

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

export { PersonalDetails };
