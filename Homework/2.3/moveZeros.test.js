import { moveZeros } from './moveZeros';


describe.skip('Describe moveZeros', () => {
  test('Should return array with zeros at the end', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,'a']))
      .toStrictEqual([false,1,1,2,1,3,'a',0,0]);
  });
});
