'use strict'

let activeColorScheme

const initThemeHandlers = (document) => {
  activeColorScheme = preferedColorScheme()
  const elements = document.querySelectorAll('.toggle-theme')
  for (const element of elements) initHandler(document, element)
}

const initHandler = (document, element) => {
  element.addEventListener('click', toggleTheme)
}

const toggleTheme = () => {
  setTheme(activeColorScheme === 'dark' ? 'light' : 'dark')
}

const setTheme = (colorScheme) => {
  activeColorScheme = colorScheme
  document.querySelector('html').setAttribute('data-theme', colorScheme)
}

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
