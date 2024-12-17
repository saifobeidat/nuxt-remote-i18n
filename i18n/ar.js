export default defineI18nLocale(async (locale) => {
  return $fetch('https://jsonplaceholder.typicode.com/posts/1');
});
