const number  = require('../lib');

test('nullCheck', () => {
    expect(number('',true)).toEqual(0);
});
test('Success', () => {
    expect(number('1233',true)).toEqual('1K');
});
test('testSymBolFalse', () => {
    expect(number('1233',false,1)).toEqual('1,233.0');
});

test('Int Check', () => {
    expect(number(1233,true)).toEqual('1.2K');
});

test('String Check', () => {
    expect(number('1233',true, 0)).toEqual('1K');
});

test('InputText', () => {
    expect(number('asd2374',true,0)).toEqual(false);
});
test('inputDotLength', () => {
    expect(number('1234567891923987',true,102)).toEqual(false);
});

test('costomReturnTest', () => {
    expect(number('121.231233.134',false,2,'-')).toEqual('-');
});
test('costomReturnTestString', () => {
    expect(number('121ㅁㅈㅈㅁ.134',false,101,'??')).toEqual('??');
});