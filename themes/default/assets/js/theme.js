let activeColorScheme

const initThemeHandlers = (document) => {
  activeColorScheme = getActiveTheme()
  setTheme(document, activeColorScheme)
  const elements = document.querySelectorAll('.toggle-theme')
  for (const element of elements) initHandler(document, element)
}

const initHandler = (document, element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    toggleTheme(document)
  })
}

const toggleTheme = (document) => {
  const colorScheme = activeColorScheme === 'dark' ? 'light' : 'dark'
  setTheme(document, colorScheme)
}

const setTheme = (document, colorScheme) => {
  activeColorScheme = colorScheme
  globalThis?.localStorage?.setItem('activeColorScheme', colorScheme)
  document.querySelector('html').classList.add('theme-transistion')
  document.querySelector('html').setAttribute('data-theme', colorScheme)
  document.querySelector('html').classList.remove('theme-transistion')
}

const getActiveTheme = () =>
  globalThis?.localStorage?.getItem('activeColorScheme') ??
  preferedColorScheme()

const preferedColorScheme = () => {
  const matchMedia = globalThis?.matchMedia
  if (matchMedia == null) return
  const isDark = matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? 'dark' : 'light'
}

window.addEventListener('DOMContentLoaded', () => {
  const document = globalThis?.document
  if (document == null) return
  initThemeHandlers(document)
})
