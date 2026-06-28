export function getTimeAgo(timestamp) {

  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) {
    return "Now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} M`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} H`;
  }

  const days = Math.floor(hours / 24);

  if (days < 30) {
    return `${days} D`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months} M`;
  }

  const years = Math.floor(months / 12);

  return `${years} Y`;
}