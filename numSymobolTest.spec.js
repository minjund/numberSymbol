const number  = require('./index');

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
    expect(number('1233',0,true)).toEqual('1K');
});

test('InputText', () => {
    expect(number('asd2374',0,true)).toEqual(false);
});