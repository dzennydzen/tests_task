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


