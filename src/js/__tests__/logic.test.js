import checkHealth from '../logic.js';
import { sortHeroesByHealth } from '../logic.js';
import fetchData from '../http.js';
import { getLevel } from '../logic.js';


jest.mock('../http.js');

test('getLevel returns level when status is ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 42 });

    expect(getLevel(1)).toBe('Ваш текущий уровень: 42');
});

test('getLevel returns error message when status is not ok', () => {
    fetchData.mockReturnValue({ status: 'error', cause: 'Something wrong' });

    expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});


describe('checkHealth', () => {
    test.each([
        [{health: 70}, 'healthy'],
        [{health: 50}, 'wounded'],
        [{health: 15}, 'wounded'],
        [{health: 40}, 'wounded'],
        [{health: 10}, 'critical'],
        [{health: 5}, 'critical'],
    ])('для здоровья %p возвращает %s', (character, expected) => {
        expect(checkHealth(character)).toBe(expected);
    });
});


describe('sortHeroesByHealth', () => {
    test('Сортирует персонажей по убыванию health', () => {
       const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 40 }
       ];

       const sorted = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 40 },
        { name: 'мечник', health: 10 }
       ];

       expect(sortHeroesByHealth(heroes)).toEqual(sorted);
    });

    test.each([
      [[], 'Не переданы объекты для сортировки'],
      [null, 'Не переданы объекты для сортировки'],
      [undefined, 'Не переданы объекты для сортировки'],
      [{name: 'лучник', health: 40}, 'Некорректный формат данных'],
      ['string', 'Некорректный формат данных']
    ])('для данных %p возвращает %s', (data, expected) => {
        expect(sortHeroesByHealth(data)).toBe(expected);
    });
});