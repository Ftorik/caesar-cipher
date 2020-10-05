const shiftCode = (code, shift) => {
    let shiftedCode = code + shift
    return shiftedCode > 25 ? shiftedCode - 26 : shiftedCode
}

const unshiftCode = (code, shift) => {
    let shiftedCode = code - shift
    return shiftedCode < 0 ? shiftedCode + 26 : shiftedCode
}

const encodeValue = (value, shift) => {
    let charCode = value.charCodeAt();

    if (shift > 25) {
        shift %= 26
    }

    if (charCode >= 65 && charCode <= 90) {
        charCode -= 65
        return String.fromCharCode(shiftCode(charCode, shift) + 65)
    } else if (charCode >= 97 && charCode <= 122) {
        charCode -= 97
        return String.fromCharCode(shiftCode(charCode, shift) + 97)
    } else {
        return value
    }
}

const decodeValue = (value, shift) => {
    let charCode = value.charCodeAt();

    if (shift > 25) {
        shift %= 26
    }

    if (charCode >= 65 && charCode <= 90) {
        charCode -= 65
        return String.fromCharCode(unshiftCode(charCode, shift) + 65)
    } else if (charCode >= 97 && charCode <= 122) {
        charCode -= 97
        return String.fromCharCode(unshiftCode(charCode, shift) + 97)
    } else {
        return value
    }
}

module.exports = {decodeValue: decodeValue, encodeValue: encodeValue}