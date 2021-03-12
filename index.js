module.exports.capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports.capitalizeLast = (str) => {
    const strLength = str.length
    return str.slice(0, strLength - 1) + str.charAt(strLength - 1).toUpperCase()
}

module.exports.capitalizeByIndex = (str, idx) => {
    const strLength = str.length
    switch (idx) {
        case 0:
            return this.capitalizeFirst(str)
        case strLength - 1:
            return this.capitalizeLast(str)
        default:
            const charToUppercase = str.charAt(idx).toUpperCase()
            return str.slice(0, idx) + charToUppercase + str.slice(idx + 1, strLength)
    }
}