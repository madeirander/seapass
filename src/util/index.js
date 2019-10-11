export function getEntryIdFromPath(path) {
  return path.indexOf('entry') !== -1
    ? parseInt(path.split('/')[[path.split('/').length - 1]], 10)
    : 0
}
