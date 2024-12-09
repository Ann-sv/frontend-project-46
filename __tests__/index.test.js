// это пользователь скрипта
import genDiff from '../index.js';

// const checkResult = genDiff();

describe('genDiff', () => {
  const result = genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

  it('должен вернуть пустую строку при отсутствии различий между файлами', () => {
    expect(result).toBeUndefined();
  });

  // it('должен отображать добавленные ключи', () => {
  //   expect(result).toContain('+ key1: value1');
  // });

  // it('должен отображать измененные значения', () => {
  //   expect(result).toContain('- oldKey: oldValue');
  //   expect(result).toContain('+ newKey: newValue');
  // });

  // it('должен отображать удаленные ключи', () => {
  //   expect(result).toContain('- deletedKey: deletedValue');
  // });

  // Добавьте еще несколько тестов для проверки различных сценариев...
});
