// get a the current date
// expectec output:
// mm-dd-yyy, mm/dd/yyy or dd-mm-yyy, dd/mm/yyy

export const todayDate = (date: Date = new Date()): string => {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return `${m}/${d}/${y}`
}