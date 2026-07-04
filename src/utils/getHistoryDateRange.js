export function getHistoryDateRange(period) {
  const today = new Date();

  const from = new Date(today);

  switch (period) {
    case "1D":
      from.setDate(today.getDate() - 1);
      break;

    case "1W":
      from.setDate(today.getDate() - 7);
      break;

    case "1M":
      from.setMonth(today.getMonth() - 1);
      break;

    case "3M":
      from.setMonth(today.getMonth() - 3);
      break;

    case "1Y":
      from.setFullYear(today.getFullYear() - 1);
      from.getMonth(from.getMonth() - 1);
      break;

    case "5Y":
      from.setFullYear(today.getFullYear() - 5);
      break;

    default:
      from.setMonth(today.getMonth() - 1);
  }

  const formatDate = (date) => date.toISOString().split("T")[0];

  return {
    from: formatDate(from),
    to: formatDate(today),
  };
}
