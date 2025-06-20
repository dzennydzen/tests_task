import fetchData from './http.js';

export default function checkHealth(character) {
	const h = character.health;
	if (h > 50) {
		return 'healthy';
	} else if (h >= 15 && h <= 50) {
		return 'wounded';
	} else {
		return 'critical';
	}
}

export function sortHeroesByHealth(chrts) {
	if (!chrts || chrts.length === 0) {
		return 'Не переданы объекты для сортировки';
	} else if (!Array.isArray(chrts)) {
		return 'Некорректный формат данных';
	}

	return chrts.sort((a,b) => b.health - a.health);
};

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`;
  }
  return 'Информация об уровне временно недоступна';
}
