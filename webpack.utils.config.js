/**
 * Флаг текущего окружения
 * @type {boolean}
 */
export const isProduction = (process.argv.indexOf('--mode=production') !== -1);
