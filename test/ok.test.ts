import { describe, expect, it } from "vitest";

import { okValue } from "../src/ok";

describe("okValue", () => {
  //it("dummy test", () => {
  //  const value = okValue();
  //
  //  if (value.kind !== "ok") {
  //    expect(value.kind).toBe("ng");
  //  }
  //});

  it("verify okValue", () => {
    const value = okValue();
    expect.assert(value.kind === "ok");
    //if(value.kind !== "ok") {
    //  throw new Error("unexpected ok value");
    //}

    expect(value.value).toBe("hoge");
  });

  it("verify throw", () => {
    const value = okValue();
    //if(value.kind !== "ng") {
    //  throw new Error("unexpected ok value");
    //}
    //
    expect(value.kind).toBe("ok");
  });

  it("verify assert", () => {
    const value = okValue();
    expect.assert(value.kind === "ok");
    expect(value.value).toBe("hoge");
  });

  it("verify assert kind", () => {
    const value = okValue();
    expect(value.kind).toBe("ng");
  });

  it("verify assert kind ng", () => {
    const value = okValue();
    expect.assert(value.kind === "ng", "unexpected ok value");
  });
});
