module.exports = function (data = '0', isSymbol= false, afterDotLength = 0) {
    // data type -> String
    // 'data'의 3자리 마다 , 를 찍어줍니다.
    // afterDotLength에 전달된 숫자값이 있으면 소수점 아래 자리를 버립니다.
    // isSymbol : true 심볼로 체크됩니다. false 3자리마다 , 를 찍어줍니다.
    if (!data) { return 0 }
    let NumberCheckReg = /^[0-9]*$/ // number Reg
    const commaReg = /\B(?=(\d{3})+(?!\d))/g // comma Reg
    const inputNumber = typeof data === 'number' ? String(data) : data
    //check Number
    let numData = Number(inputNumber)

    if(!NumberCheckReg.test(inputNumber)) { return false }

    if (!isNaN(afterDotLength)) {
        numData = numData.toFixed(afterDotLength)
    }
    const arr = String(numData).split('.')
    /* 2023/05/22
    * 숫자에 따라 심볼로 변환하는 로직 추가
    */
    let result = arr[1] ? arr[0].replace(commaReg, ',') + '.' + arr[1] : arr[0].replace(commaReg, ',')
    if (isSymbol) {
        // 숫자를 약식 표현하기위해 단위 자리수 마다 알파벳을 붙인다
        const symbols = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z']
        const resultLen = Number(data).toString().length
        // Math.floor -> 소수점 이하 반올림
        const symbolIndex = Math.floor((resultLen - 1) / 3)
        // 해당 심볼 구함
        const symbol = symbols[symbolIndex]
        const arrayReslut = result.split(',')
        arrayReslut.forEach(() => {
            if (!isNaN(afterDotLength) && arrayReslut.length > 1) {
                // 자릿수에 따른 심볼링 세팅 수정 필요
                // if (checkLen === afterDotLength) {
                //   symbolIndex = Math.floor((checkLen - 1) / 3)
                //   symbol = symbols[symbolIndex]
                //   result = arr[0].replace(comma, ',')
                // }
                // 자릿수 초과하면 NaN 처리 필요
                result = Number(arrayReslut[0] + '.' + inputNumber.substring(arrayReslut[0].length, arrayReslut[0].length + afterDotLength)) + symbol
            } else {
                result = Number(arrayReslut[0])
            }
        })
    }
    return result
};