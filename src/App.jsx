import { useState, useEffect } from 'react'
import './App.css'

const BG_DEFAULT = '/bg.jpg'
const BG_SPECIAL = '/tpb-sb.png'

// Preload images
const preloadImage = (src) => {
  const img = new Image()
  img.src = src
}

preloadImage(BG_DEFAULT)
preloadImage(BG_SPECIAL)

const SEASON_EPISODES = {
  1: 6,
  2: 7,
  3: 7,
  4: 8,
  5: 10,
  6: 6,
  7: 10,
  8: 10,
  9: 10,
  10: 10,
  11: 10,
  12: 10
}

function App() {
  const [season, setSeason] = useState(null)
  const [episode, setEpisode] = useState(null)
  const [backgroundImg, setBackgroundImg] = useState(BG_DEFAULT)

  // Preload images on component mount
  useEffect(() => {
    const img1 = new Image()
    const img2 = new Image()
    img1.src = BG_DEFAULT
    img2.src = BG_SPECIAL
  }, [])
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min) + 1
  }

  const getGreasy = () => {
    // Pick a random season
    const seasonSelection = getRandomArbitrary(1, 12)
    setSeason(seasonSelection)

    // Get number of episodes for that season
    const numberOfEpisodes = SEASON_EPISODES[seasonSelection]

    let episodeSelection
    let selectedImage = BG_DEFAULT

    // Special weighting for seasons 7 and 8
    if (seasonSelection === 7) {
      const y = Math.floor(Math.random() * 100)
      if (y <= 25) {
        episodeSelection = 4
        selectedImage = BG_SPECIAL
      } else if (y <= 50) {
        episodeSelection = 5
        selectedImage = BG_SPECIAL
      } else if (y <= 75) {
        episodeSelection = 10
        selectedImage = BG_SPECIAL
      } else {
        episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
        selectedImage = BG_DEFAULT
      }
    } else if (seasonSelection === 8) {
      const z = Math.floor(Math.random() * 100)
      if (z <= 50) {
        episodeSelection = 10
        selectedImage = BG_SPECIAL
      } else {
        episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
        selectedImage = BG_DEFAULT
      }
    } else {
      episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
      selectedImage = BG_DEFAULT
    }

    setEpisode(episodeSelection)
    setBackgroundImg(selectedImage)
  }

  return (
    <div className="app-wrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="header">
        <h2 className="title">Trailer Park Boys EPISODE RANDOMIZER!!!!!</h2>
      </header>
      <div className="container">
        <div className="content">
          <h1 className="season-display">
            Season: <span>{season !== null ? season : '-'}</span>
          </h1>
          <h1 className="episode-display">
            Episode: <span>{episode !== null ? episode : '-'}</span>
          </h1>
          <button onClick={getGreasy} className="btn-greasy">
            GET GREASY
          </button>
        </div>
      </div>
      <footer className="version">v1.0.0</footer>
    </div>
  )
}

export default App
