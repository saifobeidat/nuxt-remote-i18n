export default defineI18nLocale(async (locale) => {
  return $fetch('https://cdn.jsdelivr.net/gh/saifobeidat/i18n@main/ar.json');
});
