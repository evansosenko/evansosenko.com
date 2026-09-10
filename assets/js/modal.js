globalThis.addEventListener('DOMContentLoaded', () => {
  const document = globalThis.document
  if (document == null) return
  initHandlers(document)
})

const initHandlers = (document) => {
  const elements = document.querySelectorAll('[data-target]')
  for (const element of elements) initHandler(document, element)
}

const initHandler = (document, element) => {
  const targetId = element.getAttribute('data-target')
  const target = document.getElementById(targetId)
  if (target == null) return

  const handleKeydown = (event) => {
    if (['Escape', 'Esc'].includes(event?.key) || event?.keyCode === 27) {
      event.preventDefault()
      close()
    }
  }

  const handleOpenClick = (event) => {
    event.preventDefault()
    open()
  }

  const handleOutsideClick = (event) => {
    if (event.target === element) return
    const inner = target.querySelector('article')
    if (inner.contains(event.target)) return
    event.preventDefault()
    close()
  }

  const close = () => {
    target.setAttribute('open', false)
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('click', handleOutsideClick)
  }

  const open = () => {
    target.setAttribute('open', true)

    const closeBtn = target.querySelector('[data-action="close"]')
    if (closeBtn != null) {
      closeBtn.addEventListener('click', close)
    }

    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('click', handleOutsideClick)
    document.removeEventListener('click', handleOpenClick)
  }

  element.addEventListener('click', handleOpenClick)
}
