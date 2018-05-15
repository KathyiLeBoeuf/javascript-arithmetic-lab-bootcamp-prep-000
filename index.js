
/*
var a = 4;
var b = 3;
*/
var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

// 1
function add(a, b) {
  return (a + b);
}
console.log(add(2,4));

// 2
function subtract(a, b) {
  return (a - b);
}
subtract(6, 3);

// 3
function multiply(a, b) {
  return (a * b);
}
multiply(4, 5)

// 4
function divide(a, b) {
  return (a / b);
}
divide(18, 2);

// 5
function inc(n) {
  return (n = n + 1);
}
inc(13);

// 6
function dec(n) {
   return (n = n - 1);
}
dec(16);

// 7
function makeInt(n, base) {
  return parseInt(n);
}
makeInt('4', 10);
makeInt('stuff', 10);
makeInt(7, 10);

// 8
function preserveDecimal(n) {
  return parseFloat(n)
}
preserveDecimal(3.14159);
preserveDecimal(2.222);
preserveDecimal('stuffity');


/*
//7
describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
//8
describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})

*/