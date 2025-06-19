import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules/',
      'dist/',
      '*.config.js',
      '**/temp/*'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Добавил node-глобалы для универсальности
      },
      ecmaVersion: 'latest', // Лучше использовать 'latest' вместо года
      sourceType: 'module'
    },
    rules: {
      ...js.configs.recommended.rules,  // Базовые рекомендованные правила
      'no-undef': 'off', // Отключаем для тестовых глобалов
      'no-unused-expressions': 'off',
      // Правила для пробелов и табов (мягкие)
      'no-trailing-spaces': 'error',     // Ошибка на пробелы в конце строк
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // Разрешает табы с выравниванием пробелами
      'indent': 'off',                  // Полностью отключает проверку отступов (табы/пробелы)
      'quotes': ['error', 'single', { avoidEscape: true }], // Единообразие кавычек
      'semi': ['error', 'always'],      // Точки с запятой обязательны
      'no-multi-spaces': ['error', { ignoreEOLComments: true }], // Лишние пробелы в коде (но разрешает в комментариях)
      'keyword-spacing': ['error', { before: true, after: true }], // Пробелы вокруг if/for и др.
      'space-infix-ops': 'error',       // Пробелы вокруг операторов (=, +, - и т.д.)
      'no-irregular-whitespace': 'error' // Запрет невидимых символов (например, &nbsp;)
    }
  }
];