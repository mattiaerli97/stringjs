module.exports.capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports.capitalizeLast = (str) => {
    const strLength = str.length
    return str.slice(0, strLength - 1) + str.charAt(strLength - 1).toUpperCase()
}

module.exports.capitalizeByIndex = (str, idx) => {
    const strLength = str.length
    if (typeof idx === 'number') {
        switch (idx) {
            case 0:
                return this.capitalizeFirst(str)
            case strLength - 1:
                return this.capitalizeLast(str)
            default:
                const charToUppercase = str.charAt(idx).toUpperCase()
                return str.slice(0, idx) + charToUppercase + str.slice(idx + 1, strLength)
        }
    } else if (typeof idx === 'object' && Array.isArray(idx)) {
        let s = str
        idx.map((i) => {
            switch (i) {
                case 0:
                    s = this.capitalizeFirst(s)
                    break
                case strLength - 1:
                    s = this.capitalizeLast(s)
                    break
                default:
                    const charToUppercase = s.charAt(i).toUpperCase()
                    s = i > strLength ? s : s.slice(0, i) + charToUppercase + s.slice(i + 1, strLength)
                    break
            }
        })
        return s
    } else if (typeof idx === 'function') {
        let s = ''
        for (let i = 0; i < str.length; i++) {
            s = s + (idx(i) ? str[i].toUpperCase() : str[i])
        }
        return s
    }
}