export default defineEventHandler(async (event) => {
  
    const repo = await $fetch('https://cdn.jsdelivr.net/gh/saifobeidat/i18n@main/en.json')

    console.log(repo);
    
  
    return repo
  })
  