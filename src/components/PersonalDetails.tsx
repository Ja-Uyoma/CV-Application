import { useForm } from "react-hook-form";
import { PersonalDetailsData } from "../types/PersonalDetails";
import { useEffect } from "react";

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

function PersonalDetailsPreview(props: { details: PersonalDetailsData }) {
  return (
    <div>
      {props.details && (
        <>
          <p>{props.details.givenName}</p>
          <p>{props.details.familyName}</p>
          <p>{props.details.headline}</p>
          <p>{props.details.emailAddress}</p>
          <p>{props.details.phoneNumber}</p>
          <p>{props.details.address}</p>
          <p>{props.details.postCode}</p>
          <p>{props.details.city}</p>
        </>
      )}
    </div>
  );
}

export { PersonalDetails, PersonalDetailsPreview };
