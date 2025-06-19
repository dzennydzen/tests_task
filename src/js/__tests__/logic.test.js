import checkHealth from '../logic.js';
import { sortHeroesByHealth } from '../logic.js';


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


 // test('Не должно работать с пустым массивом или отсутствием входных данных', () => {
    //     expect(sortHeroesByHealth([])).toBe('Не переданы объекты для сортировки');
    //     expect(sortHeroesByHealth()).toBe('Не переданы объекты для сортировки');
    // });

    // test('Не должно работать с не-массивом', () => {
    //     expect(sortHeroesByHealth({name: 'лучник', health: 40})).toBe('Некорректный формат данных');
    //     expect(sortHeroesByHealth({name: 'лучник', health: 40}, {name: 'маг', health: 80})).toBe('Некорректный формат данных');
    // });