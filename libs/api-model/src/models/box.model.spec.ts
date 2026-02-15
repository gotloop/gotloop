import { BoxUI } from './box.model';
describe('Box', () => {
  test('constructor', () => {
    const box: BoxUI = {
      x: 0,
      y: 0,
      w: 120,
      h: 120,
    };
    expect(box).toBeDefined();
  });
});
