const BasicInformation = () => {
  return (
    <section>
      <h2>Basic Information</h2>

      <form action="/" method="post">
        <div>
          <div>
            <label htmlFor="given-name">
              Given Name
              {/** */}
              <input type="text" name="given-name" id="given-name" />
            </label>
          </div>

          <div>
            <label htmlFor="family-name">
              Family Name
              {/** */}
              <input type="text" name="family-name" id="family-name" />
            </label>
          </div>

          <div>
            <label htmlFor="email">
              Email Address
              {/** */}
              <input type="email" name="email" id="email" />
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="headline">
            Headline
            {/** */}
            <input type="text" name="headline" id="headline" />
          </label>
        </div>

        <div>
          <label htmlFor="phone-number">
            Phone Number
            {/** */}
            <input type="tel" name="phone-number" id="phone-number" />
          </label>
        </div>

        <div>
          <label htmlFor="address">
            Address
            {/** */}
            <input type="text" name="address" id="address" />
          </label>
        </div>

        <div>
          <div>
            <label htmlFor="post-code">
              Postal code
              {/** */}
              <input type="text" name="post-code" id="post-code" />
            </label>
          </div>

          <div>
            <label htmlFor="city">
              City
              {/** */}
              <input type="text" name="city" id="city" />
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export { BasicInformation };
