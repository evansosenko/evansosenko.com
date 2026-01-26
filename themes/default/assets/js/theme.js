globalThis.addEventListener('DOMContentLoaded', () => {
  const document = globalThis.document
  if (document == null) return
  initHandlers(document)
})

let activeColorScheme
const initHandlers = (document) => {
  activeColorScheme = getActiveTheme()
  setTheme(document, activeColorScheme)
  initPreferredColorSchemeHandler(document)
  const elements = document.querySelectorAll('.toggle-theme')
  for (const element of elements) initHandler(document, element)
}

const initHandler = (document, element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    toggleTheme(document)
  })
}

const initPreferredColorSchemeHandler = (document) => {
  const matchMedia = globalThis.matchMedia
  if (matchMedia == null) return
  const mediaQuery = matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    const overriddenColorScheme = globalThis.sessionStorage?.getItem(
      'overriddenColorScheme',
    )
    if (overriddenColorScheme != null) return
    setTheme(document, getPreferredColorScheme())
  })
}

const toggleTheme = (document) => {
  const colorScheme = activeColorScheme === 'dark' ? 'light' : 'dark'
  document.querySelector('html').classList.add('theme-transistion')
  globalThis.setTimeout(() => {
    setTheme(document, colorScheme)
  }, 0)
  globalThis.setTimeout(() => {
    document.querySelector('html').classList.remove('theme-transistion')
  }, 2000)
}

const setTheme = (document, colorScheme) => {
  activeColorScheme = colorScheme
  if (colorScheme === getPreferredColorScheme()) {
    globalThis.sessionStorage?.removeItem('overriddenColorScheme')
  } else {
    globalThis.sessionStorage?.setItem('overriddenColorScheme', colorScheme)
  }
  document.querySelector('html').setAttribute('data-theme', colorScheme)
}

const getActiveTheme = () =>
  globalThis.sessionStorage?.getItem('overriddenColorScheme') ??
  getPreferredColorScheme()

const getPreferredColorScheme = () => {
  const matchMedia = globalThis.matchMedia
  if (matchMedia == null) return
  const isDark = matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? 'dark' : 'light'
}
