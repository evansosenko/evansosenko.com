let activeColorScheme

const initHandlers = (document) => {
  activeColorScheme = getActiveTheme()
  if (activeColorScheme !== preferedColorScheme()) {
    setTheme(document, activeColorScheme)
  }
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
  document.querySelector('html').classList.add('theme-transistion')
  setTimeout(() => {
    setTheme(document, colorScheme)
  }, 0)
  setTimeout(() => {
    document.querySelector('html').classList.remove('theme-transistion')
  }, 2000)
}

const setTheme = (document, colorScheme) => {
  activeColorScheme = colorScheme
  globalThis?.sessionStorage?.setItem('activeColorScheme', colorScheme)
  document.querySelector('html').setAttribute('data-theme', colorScheme)
}

const getActiveTheme = () =>
  globalThis?.sessionStorage?.getItem('activeColorScheme') ??
  preferedColorScheme()

const preferedColorScheme = () => {
  const matchMedia = globalThis?.matchMedia
  if (matchMedia == null) return
  const isDark = matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? 'dark' : 'light'
}

globalThis?.addEventListener('DOMContentLoaded', () => {
  const document = globalThis?.document
  if (document == null) return
  initHandlers(document)
})
