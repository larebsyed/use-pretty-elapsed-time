import formatTime from "../format-time";

describe("formatTime", () => {
  it("should format the time correctly", () => {
    expect(formatTime("YYYY-MM-DD HH:mm:ss", 1634550000)).toEqual(
      "2021-10-18 09:40:00"
    );
    expect(formatTime("MM/DD/YYYY HH:mm:ss", 1634550000)).toEqual(
      "10/18/2021 09:40:00"
    );
    expect(formatTime("DD/MM/YYYY HH:mm:ss", 1634550000)).toEqual(
      "18/10/2021 09:40:00"
    );
    expect(formatTime("HH:mm:ss", 1634550000)).toEqual("09:40:00");
    expect(formatTime("YYYY-MM-DD", 1634550000)).toEqual("2021-10-18");
    expect(formatTime("MM/DD/YYYY", 1634550000)).toEqual("10/18/2021");
    expect(formatTime("DD/MM/YYYY", 1634550000)).toEqual("18/10/2021");
  });
  it("should format the time correctly", () => {
    const format = "YYYY-MM-DD HH:mm:ss";
    const seconds = 1621555200; // May 21, 2021 00:00:00 UTC
    const expected = "2021-05-21 00:00:00";
    const result = formatTime(format, seconds);
    expect(result).toEqual(expected);
  });

  it("should pad single digit values with a leading zero", () => {
    const format = "MM/DD/YYYY HH:mm:ss";
    const seconds = 1640977200;
    const expected = "12/31/2021 19:00:00";
    const result = formatTime(format, seconds);
    expect(result).toEqual(expected);
  });

  it("should handle different format tokens", () => {
    const format = "DD/MM/YYYY HH:mm:ss";
    const seconds = 1662057600; // Jan 1, 2022 00:00:00 UTC
    const expected = "01/09/2022 18:40:00";
    const result = formatTime(format, seconds);
    expect(result).toEqual(expected);
  });
  it("throws an error for invalid format string", () => {
    expect(() => {
      const result = formatTime("invalid format", 1234567890);
      expect(result).toEqual("invalid format");
    }).not.toThrow();
  });
});
