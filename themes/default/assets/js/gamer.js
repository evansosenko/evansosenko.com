const initHandlers = (document) => {
  const elements = document.querySelectorAll('.gamer-button')
  for (const element of elements) initHandler(document, element)
}

const initHandler = (document, element) => {
  const Howl = globalThis?.Howl
  if (Howl == null) return

  const sound = new Howl({
    preload: true,
    src: [
      '{{ (resources.Get "audio/shoot.wav" | resources.Fingerprint).RelPermalink }}'
    ]
  })

  element.addEventListener('click', (event) => {
    event.preventDefault()
    sound.play()
  })
}

globalThis?.addEventListener('DOMContentLoaded', () => {
  const document = globalThis?.document
  if (document == null) return
  initHandlers(document)
})
