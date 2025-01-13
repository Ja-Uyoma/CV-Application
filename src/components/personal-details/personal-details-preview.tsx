import { usePersonalStore } from "./hooks";

export function PersonalDetailsPreview() {
  const givenName = usePersonalStore((state) => state.givenName);
  const familyName = usePersonalStore((state) => state.familyName);
  const headline = usePersonalStore((state) => state.headline);
  const emailAddress = usePersonalStore((state) => state.emailAddress);
  const phoneNumber = usePersonalStore((state) => state.phoneNumber);
  const address = usePersonalStore((state) => state.address);
  const postCode = usePersonalStore((state) => state.postCode);
  const city = usePersonalStore((state) => state.city);

  return (
    <>
      <p>
        <span className="uppercase text-2xl bg-black text-white px-1">
          Personal Details
        </span>
      </p>
      <p>
        <span>{givenName}</span> <span>{familyName}</span>
      </p>
      <p>{headline}</p>
      <p>{emailAddress}</p>
      <p>{phoneNumber}</p>
      <p>{address}</p>
      <p>{postCode}</p>
      <p>{city}</p>
    </>
  );
}
