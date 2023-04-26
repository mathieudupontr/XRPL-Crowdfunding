
export function convertUnixSecondsToDate(unixSeconds) {
  const date = new Date(unixSeconds * 1000)
  return date.toLocaleDateString()
}