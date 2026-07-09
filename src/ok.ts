import { createOk } from "ts-utility-kit/result";

export function okValue() {
  const value = createOk("hoge")

  return value
}
