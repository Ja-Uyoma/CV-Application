import { usePersonalStore } from "./hooks";
import { User, Mail, Phone, House } from "lucide-react";

export function PersonalDetailsPreview() {
  const givenName = usePersonalStore((state) => state.givenName);
  const familyName = usePersonalStore((state) => state.familyName);
  const headline = usePersonalStore((state) => state.headline);
  const emailAddress = usePersonalStore((state) => state.emailAddress);
  const phoneNumber = usePersonalStore((state) => state.phoneNumber);
  const address = usePersonalStore((state) => state.address);
  const postCode = usePersonalStore((state) => state.postCode);
  const city = usePersonalStore((state) => state.city);

  const storeHasData = () => {
    return (
      givenName ||
      familyName ||
      headline ||
      emailAddress ||
      phoneNumber ||
      address ||
      postCode ||
      city
    );
  };

  return (
    <section>
      {storeHasData() ? (
        <h2>
          <span className="text-2xl bg-black text-white px-1">
            Personal Details
          </span>
        </h2>
      ) : (
        <></>
      )}

      <hr className="my-2" />

      {givenName ? (
        <p className="flex gap-2">
          <span>
            <User />
          </span>
          <span>{givenName}</span> <span>{familyName}</span>
        </p>
      ) : (
        <></>
      )}

      {headline ? <p>{headline}</p> : <></>}

      {emailAddress ? (
        <p className="flex gap-2">
          <span>
            <Mail />
          </span>
          <span>{emailAddress}</span>
        </p>
      ) : (
        <></>
      )}

      {phoneNumber ? (
        <p className="flex gap-2">
          <span>
            <Phone />
          </span>{" "}
          <span>{phoneNumber}</span>
        </p>
      ) : (
        <></>
      )}

      {address || postCode || city ? (
        <p className="flex gap-2">
          <span>
            <House />
          </span>
          <span>
            <span>{address}</span>
            <br />
            <span>
              {postCode} {city}
            </span>
          </span>
        </p>
      ) : (
        <></>
      )}
    </section>
  );
}
