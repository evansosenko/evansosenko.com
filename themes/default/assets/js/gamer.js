globalThis.addEventListener('DOMContentLoaded', () => {
  const document = globalThis.document
  if (document == null) return
  initHandlers(document)
})

const initHandlers = (document) => {
  const elements = document.querySelectorAll('.gamer-button')
  if (elements.length === 0) return
  for (const element of elements) initHandler(element)
}

const initHandler = (element) => {
  const textEl = element.querySelector('span')
  const iconEl = element.querySelector('[data-icon]')

  if (textEl == null || iconEl == null) return

  let n = games.findIndex(
    ({ icon }) => iconEl.getAttribute('data-icon') === icon,
  )
  preloadSounds(n)

  textEl.addEventListener('click', (event) => {
    event.preventDefault()
    n = (n + 1) % games.length
    preloadSounds(n)
    iconEl.setAttribute('data-icon', games[n].icon)
    sounds[n].play()
  })

  iconEl.addEventListener('click', (event) => {
    event.preventDefault()
    sounds[n].play()
  })
}

const preloadSounds = (n) => {
  initSound(n)
  initSound((n + 1) % games.length)
  initSound((n + 2) % games.length)
}

const sounds = {}
const initSound = (n) => {
  if (sounds[n] != null) return
  sounds[n] = createSound(games[n].sound)
}

const createSound = (src) => {
  const fetch = globalThis.fetch
  const preloaded = fetch(src)
    .then((res) => res.arrayBuffer())
    .catch(console.error)

  return {
    play: () => preloaded.then(playAudioBuffer).catch(console.error),
  }
}

let audioContext
const playAudioBuffer = async (arrayBuffer) => {
  const AudioContext = globalThis.AudioContext
  if (AudioContext == null) return
  audioContext ??= new AudioContext()
  const source = audioContext.createBufferSource()
  source.buffer = await audioContext.decodeAudioData(arrayBuffer.slice(0))
  source.connect(audioContext.destination)
  source.start()
}

const games = [
  {
    icon: 'alien-8bit-solid',
    sound:
      '{{ (resources.Get "audio/shoot.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'block-question-solid',
    sound:
      '{{ (resources.Get "audio/coin.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'mushroom-duotone',
    sound:
      '{{ (resources.Get "audio/1up.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'dungeon-duotone',
    sound:
      '{{ (resources.Get "audio/secret.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'treasure-chest-solid',
    sound:
      '{{ (resources.Get "audio/item.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'skull-duotone',
    sound:
      '{{ (resources.Get "audio/eekum-bokum.mp3" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'music-regular',
    sound:
      '{{ (resources.Get "audio/note.ogg" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'puzzle-piece-duotone',
    sound:
      '{{ (resources.Get "audio/jiggy.ogg" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'starfighter-twin-ion-engine-solid',
    sound:
      '{{ (resources.Get "audio/tie-fighter.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'starfighter-solid',
    sound:
      '{{ (resources.Get "audio/laser.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'starship-freighter-solid',
    sound:
      '{{ (resources.Get "audio/chewbacca.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'starship-solid',
    sound:
      '{{ (resources.Get "audio/intercom.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'ring-duotone',
    sound:
      '{{ (resources.Get "audio/ring.wav" | resources.Fingerprint).RelPermalink }}',
  },
  {
    icon: 'ghost-duotone',
    sound:
      '{{ (resources.Get "audio/death.mp3" | resources.Fingerprint).RelPermalink }}',
  },
]
