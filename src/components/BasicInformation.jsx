const BasicInformation = () => {
  return (
    <section>
      <h2 className="font-bold text-xl py-4">Basic Information</h2>

      <form action="/" method="post" autoComplete="off">
        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="given-name">
              <span className="block font-medium text-gray-700">Given Name</span>
              {/** */}
              <input
                type="text"
                name="given-name"
                id="given-name"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <div className="flex-1">
            <label htmlFor="family-name">
              <span className="block font-medium text-gray-700">Family Name</span>
              {/** */}
              <input
                type="text"
                name="family-name"
                id="family-name"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="email">
            <span className="block font-medium text-gray-700">Email Address</span>
            {/** */}
            <input type="email" name="email" id="email" className="bg-gray-100 rounded-lg border-none w-full" />
          </label>
        </div>

        <div>
          <label htmlFor="headline">
            <span className="block font-medium text-gray-700">Headline</span>
            {/** */}
            <input type="text" name="headline" id="headline" className="bg-gray-100 rounded-lg border-none w-full" />
          </label>
        </div>

        <div>
          <label htmlFor="phone-number">
            <span className="block font-medium text-gray-700">Phone Number</span>
            {/** */}
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              className="bg-gray-100 rounded-lg border-none w-full"
            />
          </label>
        </div>

        <div>
          <label htmlFor="address">
            <span className="block font-medium text-gray-700">Address</span>
            {/** */}
            <input type="text" name="address" id="address" className="bg-gray-100 rounded-lg border-none w-full" />
          </label>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label htmlFor="post-code">
              <span className="block font-medium text-gray-700">Postal code</span>
              {/** */}
              <input
                type="text"
                name="post-code"
                id="post-code"
                className="bg-gray-100 rounded-lg border-none w-full"
              />
            </label>
          </div>

          <div className="flex-1">
            <label htmlFor="city">
              <span className="block font-medium text-gray-700">City</span>
              {/** */}
              <input type="text" name="city" id="city" className="bg-gray-100 rounded-lg border-none w-full" />
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export { BasicInformation };
