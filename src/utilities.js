export function formatDateTime(date) {
  const d = new Date(date);
  return `${d.getDate()}/${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
}

export function getDaysLeft(date) {
  return Math.round(
    Math.abs((new Date(date) - new Date()) / (24 * 60 * 60 * 1000))
  );
}
