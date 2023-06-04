import { classNames } from './classNames';

describe('classNames', () => {
  test('with main class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mode', () => {
    const expected = 'someClass mode1 mode2';
    expect(classNames('someClass', { mode1: true, mode2: true })).toBe(expected);
  });

  test('with falsy mode', () => {
    const expected = 'someClass mode2';
    expect(classNames('someClass', { mode1: false, mode2: true })).toBe(expected);
  });

  test('with undefined mode', () => {
    const expected = 'someClass mode2';
    expect(classNames('someClass', { mode1: undefined, mode2: true })).toBe(expected);
  });
});
