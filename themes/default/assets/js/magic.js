'use strict'

const initMagicHandlers = (document) => {
  const elements = document.querySelectorAll('.magic')
  for (const element of elements) initMagic(document, element)
}

const initMagic = (document, element) => {
  const confetti = globalThis?.confetti
  if (!confetti) return
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas)
  const con = confetti.create(canvas, {
    resize: true,
    useWorker: true
  })
  const magic = () => con()
  element.addEventListener('click', magic)
}

window.addEventListener('DOMContentLoaded', () => {
  const document = globalThis.document
  if (document == null) return
  initMagicHandlers(document)
})
