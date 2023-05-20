import { renderHook } from "@testing-library/react-hooks";
import useAnimationFrame from "../use-animation-frame";

describe("useAnimationFrame", () => {
  it("should call the callback function with elapsed time", async () => {
    const callback = jest.fn();
    const { result, unmount } = renderHook(() => useAnimationFrame(callback));

    // Simulate animation frame
    result.current.animate(1000);
    expect(callback).toHaveBeenCalledWith(1);

    // Simulate another animation frame
    result.current.animate(2000);
    expect(callback).toHaveBeenCalledWith(1);

    unmount();
  });
});
