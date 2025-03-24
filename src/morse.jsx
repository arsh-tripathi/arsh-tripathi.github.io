function mapper(string, map) {
    let retVal = ""
    for (let i = 0; i < string.length; i++) {
        retVal += map.get(string[i])
    }
    return retVal
}

function morseify(string, direction) {
    let AToM = new Map([
        ["A", ".- "],
        ["B", "-... "],
        ["C", "-.-. "],
        ["D", "-.. "],
        ["E", ". "],
        ["F", "..-. "],
        ["G", "--. "],
        ["H", ".... "],
        ["I", ".. "],
        ["J", ".--- "],
        ["K", "-.- "],
        ["L", ".-.. "],
        ["M", "-- "],
        ["N", "-. "],
        ["O", "--- "],
        ["P", ".--. "],
        ["Q", "--.- "],
        ["R", ".-. "],
        ["S", "... "],
        ["T", "- "],
        ["U", "..- "],
        ["V", "...- "],
        ["W", ".-- "],
        ["X", "-..- "],
        ["Y", "-.-- "],
        ["Z", "--.. "],
        ["0", "----- "],
        ["1", ".---- "],
        ["2", "..--- "],
        ["3", "...-- "],
        ["4", "....- "],
        ["5", "..... "],
        ["6", "-.... "],
        ["7", "--... "],
        ["8", "---.. "],
        ["9", "----. "],
        [".", ".-.-.- "],
        [",", "--..-- "],
        ["?", "..--.. "],
        ["'", ".----. "],
        ["!", "-.-.-- "],
        ["/", "-..-. "],
        ["(", "-.--. "],
        [")", "-.--.- "],
        ["&", ".-... "],
        [":", "---... "],
        [";", "-.-.-. "],
        ["=", "-...- "],
        ["+", ".-.-. "],
        ["-", "-....- "],
        ["_", "..--.- "],
        ["\"", ".-..-. "],
        ["$", "...-..- "],
        ["@", ".--.-. "],
        [" ", " "]
    ])
    let MToA = new Map()
    for (let entry in AToM.entries()) {
        MToA.set(entry[0], entry[1])
    }
    let items = []
    if (direction === "M2A") {
        items = string.split(' ')
        return mapper(items, MToA)
    } else if (direction === "A2M") {
        string = string.toUpperCase()
        for (let i = 0; i < string.length; i++) {
            items.push(string[i])
        }
        return mapper(items, AToM)
    } else {
        console.error("Invalid direction for morse code translation: ", direction)
        return null
    }
}

export default morseify