function title (value) {
  let formattedString = ''
  value.split(' ').forEach(word => {
    formattedString += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()} `
  })
  return formattedString.trim()
}
export default {
  title
}
