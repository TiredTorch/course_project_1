import { createUrl } from './createUrl';

describe('Describe createUrl', () => {
  test('Should return "/api/0" when passed "\'/api/{id}\', {id: 0}"', () => {
    expect(createUrl('/api/{id}', {id: 0}))
      .toBe('/api/0');
  });

  test('Should return "/api/undefined" when passed "name: \'Petya\'"', () => {
    expect(createUrl('/api/{id}', {
      name: 'Petya',
    }))
      .toBe('/api/undefined');
  });

  test('Should return "/api/items/0" when passed "list: "items", id: 0"', () => {
    expect(createUrl('/api/{list}/{id}', {
      list: 'items', id: 0,
    }))
      .toBe('/api/items/0');
  });
});
