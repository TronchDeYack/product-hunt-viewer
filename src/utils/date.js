function formatDate(date) {
  return `${date.toISOString().split('T')[0]}T00:00:00Z`;
}

export function getLowBoundary(day) {
  const today = new Date();
  today.setDate(today.getDate() - day);
  return formatDate(today);
}

export function getHighBoundary(day) {
  const today = new Date();
  today.setDate(today.getDate() - day + 1);
  return formatDate(today);
}
