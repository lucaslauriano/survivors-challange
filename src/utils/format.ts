export function formatDate(date) {
  const newDate = new Date(date).toLocaleDateString("en", {
    dayPeriod: "narrow",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    year: "numeric",
    minute: "2-digit",
  });
  const splitedDate = newDate.split(" ");
  return `${splitedDate[0]} ${splitedDate[1]} ${splitedDate[2]} at ${splitedDate[3]}  ${splitedDate[4]}`;
}
