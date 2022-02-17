import {createPhoneNumber} from './createPhoneNumber';


describe.skip('Describe createPhoneNumber', () => {
  test('Should return "(123) 456-7890" when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
  });
    
});