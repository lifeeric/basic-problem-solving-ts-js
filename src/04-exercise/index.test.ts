const { todayDate } = require("./index");

test("get todays date 6/11/2021", () => {
  expect(todayDate(new Date("06/11/2021"))).toBe("6/11/2021");
});
