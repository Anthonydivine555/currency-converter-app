export function formatXAxisLabel(dateString, period) {
  const date = new Date(dateString);

  if (period === "1D") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  if (period === "1W") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  if (period === "1M" || period === "3M") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  if (period === "1Y") {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    });
  }

  if (period === "5Y") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
    });
  }

  return date.toLocaleDateString("en-US");
}
