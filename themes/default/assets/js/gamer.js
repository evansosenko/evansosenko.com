const gameData = [
  {
    icon: 'alien-8bit-solid',
    sound:
      '{{ (resources.Get "audio/shoot.wav" | resources.Fingerprint).RelPermalink }}'
  }
]

const initHandlers = (document) => {
  const Howl = globalThis?.Howl
  if (Howl == null) return
  const elements = document.querySelectorAll('.gamer-button')
  if (elements.length === 0) return
  const games = gameData.map(createGame)
  for (const element of elements) initHandler(document, element, games)
}

const createGame = ({ sound, ...rest }) => ({
  sound: createSound(Howl, sound),
  ...rest
})

const createSound = (Howl, url) => {
  return new Howl({
    preload: true,
    src: [url]
  })
}

const initHandler = (document, element, games) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    games[0].sound.play()
  })
}

globalThis?.addEventListener('DOMContentLoaded', () => {
  const document = globalThis?.document
  if (document == null) return
  initHandlers(document)
})
