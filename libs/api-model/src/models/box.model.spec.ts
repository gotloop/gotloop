import Box from './box.model';

describe('Box', () => {
  test('constructor', () => {
    let box = new Box();
    expect(box).toBeDefined();
  });
});
