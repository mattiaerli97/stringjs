module.exports.capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports.capitalizeLast = (str) => {
    const strLength = str.length
    return str.slice(0, strLength - 1) + str.charAt(strLength - 1).toUpperCase()
}