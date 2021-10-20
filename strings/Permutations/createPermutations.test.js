import { createPermutations } from './createPermutations.js';

function testFunc(input, expectedOutput) {
  const text = input;
  const output = createPermutations(text);
  expect(output).toStrictEqual(expectedOutput);
};

describe('createPermutations', () => {
  it('expects to generate 6 different combinations', () => {
    testFunc("ABC", ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
  })

  it('expects to generate 2 different combinations', () => {
    testFunc('12', ['12', '21']);
  })
  
  it('expects to generate array with empty string', () => {
    testFunc('', [''])
  })
});
