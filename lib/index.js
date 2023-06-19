module.exports = function (data = '0', isSymbol= false, afterDotLength = 0, customReturn = "") {
    // data type -> String
    // The default setting is to put a comma every 3 digits.
    // If there is a numeric value passed to 'afterDotLength' , it will restore decimal places.
    // isSymbol : true-> symbol Check / false -> comma every 3 digits.
    if (!data) {
        if(customReturn){
            return customReturn
        }
        return 0
    }
    let NumberCheckReg = /^[0-9]*(\.[0-9]+)?$/ // number Reg
    const commaReg = /\B(?=(\d{3})+(?!\d))/g // comma Reg
    const inputNumber = typeof data === 'number' ? String(data) : data
    //check Number
    let numData = Number(inputNumber)

    if(!NumberCheckReg.test(inputNumber)) {
        if(customReturn){
            return customReturn
        }
        return false
    }
    if(afterDotLength > 100) {
        if(customReturn){
            return customReturn
        }
        return false
    }
    if (!isNaN(afterDotLength)) {
        numData = numData.toFixed(afterDotLength)
    }
    const arr = String(numData).split('.')
    
    let result = arr[1] ? arr[0].replace(commaReg, ',') + '.' + arr[1] : arr[0].replace(commaReg, ',')

    if (isSymbol) {
        const symbols = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z']
        const resultLen = Number(data).toString().length
        const symbolIndex = Math.floor((resultLen - 1) / 3)
        const symbol = symbols[symbolIndex]
        const arrayReslut = result.split(',')
        arrayReslut.forEach(() => {
            if (!isNaN(afterDotLength) && arrayReslut.length > 1) {
                result = Number(arrayReslut[0] + '.' + inputNumber.substring(arrayReslut[0].length, arrayReslut[0].length + afterDotLength)) + symbol
            } else {
                result = Number(arrayReslut[0]).toString()
            }
        })
    }
    return result
};