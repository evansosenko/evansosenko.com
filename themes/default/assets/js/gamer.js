const gameData = [
  {
    icon: 'mushroom-duotone',
    sound:
      '{{ (resources.Get "audio/1up.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'starship-freighter-light',
    sound:
      '{{ (resources.Get "audio/chewbacca.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'block-question-solid',
    sound:
      '{{ (resources.Get "audio/coin.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'ghost-duotone',
    sound:
      '{{ (resources.Get "audio/death.mp3" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'skull-duotone',
    sound:
      '{{ (resources.Get "audio/eekum-bokum.mp3" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'treasure-chest-solid',
    sound:
      '{{ (resources.Get "audio/item.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'puzzle-piece-duotone',
    sound:
      '{{ (resources.Get "audio/jiggy.ogg" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'starfighter-solid',
    sound:
      '{{ (resources.Get "audio/laser.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'music-regular',
    sound:
      '{{ (resources.Get "audio/note.ogg" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'ring-duotone',
    sound:
      '{{ (resources.Get "audio/ring.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'dungeon-duotone',
    sound:
      '{{ (resources.Get "audio/secret.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'alien-8bit-solid',
    sound:
      '{{ (resources.Get "audio/shoot.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'starfighter-twin-ion-engine-solid',
    sound:
      '{{ (resources.Get "audio/tie-fighter.wav" | resources.Fingerprint).RelPermalink }}'
  },
  {
    icon: 'starship-solid',
    sound:
      '{{ (resources.Get "audio/intercom.wav" | resources.Fingerprint).RelPermalink }}'
  }
]

const initHandlers = (document) => {
  const Howl = globalThis?.Howl
  if (Howl == null) return
  const elements = document.querySelectorAll('.gamer-button')
  if (elements.length === 0) return
  const games = gameData.map(createGame(Howl))
  for (const element of elements) initHandler(document, element, games)
}

const initHandler = (document, element, games) => {
  const iconEl = element.querySelector('.fa')
  let n = games.findIndex(({ icon }) => iconEl.classList.contains(`fa-${icon}`))
  element.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target === element) {
      iconEl.classList.remove(`fa-${games[n].icon}`)
      n = (n + 1) % games.length
      iconEl.classList.add(`fa-${games[n].icon}`)
    }
    games[n].sound.play()
  })
}

const createGame =
  (Howl) =>
    ({ sound, ...rest }) => ({
      sound: createSound(Howl, sound),
      ...rest
    })

const createSound = (Howl, url) => {
  return new Howl({
    preload: true,
    src: [url]
  })
}

globalThis?.addEventListener('DOMContentLoaded', () => {
  const document = globalThis?.document
  if (document == null) return
  initHandlers(document)
})
