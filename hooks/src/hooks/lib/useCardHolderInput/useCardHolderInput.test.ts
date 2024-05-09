import { renderHook } from "@testing-library/react";
import useCardHolderInput from "./useCardHolderInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("카드 소지자 이름 입력에 대한 useCardHolderInput 커스텀 훅 테스트", () => {
  it("모든 조건이 유효할 때, isValid는 true여야 한다", () => {
    const { result } = renderHook(() => useCardHolderInput({ cardHolder: "John Doe" }));
    expect(result.current.validationResult.isValid).toBe(true);
    expect(result.current.validationResult.errorMessage).toBe("");
  });

  it("이름이 비어 있을 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolderInput({ cardHolder: "" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
  });

  it("이름에 영문자 이외의 문자가 포함된 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolderInput({ cardHolder: "존도우" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.ONLY_ENGLISH);
  });

  it("이름이 허용된 길이를 초과하는 경우, 오류 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardHolderInput({ cardHolder: "ABCDEFGHIJASDSAFGASDSAKLMNOPQRSTUVWXYZ" }));
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(ERROR_MESSAGE.INVALID_HOLDER_LENGTH);
  });
});
