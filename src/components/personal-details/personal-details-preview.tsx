import { useStore } from "./hooks";

export function PersonalDetailsPreview() {
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
