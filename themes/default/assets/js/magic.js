'use strict'

const initMagicHandlers = (document) => {
  const elements = document.querySelectorAll('.magic')
  for (const element of elements) initMagic(document, element)
}

const initMagic = (document, element) => {
}

window.addEventListener('DOMContentLoaded', () => {
  const document = globalThis.document
  if (document == null) return
  initMagicHandlers(document)
})
