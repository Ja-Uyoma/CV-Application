import { describe, expect, it } from "vitest";

import { createIDFromName } from "./main";

describe("createIDFromName", () => {
  it("converts to lowercase and removes whitespace from a given name", () => {
    const name = "Given Name";
    const result = createIDFromName(name);
    expect(result).toBe("given-name");
  });
});
