import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';


const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;






function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => console.log(err.message))
    }
    // fetchPhoto()
    setApod({
      "date": "2023-11-15",
      "explanation": "Cataloged as M1, the Crab Nebula is the first on Charles Messier's famous list of things which are not comets. In fact, the Crab Nebula is now known to be a supernova remnant, an expanding cloud of debris from the death explosion of a massive star. The violent birth of the Crab was witnessed by astronomers in the year 1054. Roughly 10 light-years across, the nebula is still expanding at a rate of about 1,500 kilometers per second. You can see the expansion by comparing these sharp images from th...",
      "hdurl": "https://apod.nasa.gov/apod/image/2311/Crab_Webb_998.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "M1: The Incredible Expanding Crab",
      "url": "https://apod.nasa.gov/apod/image/2311/Crab_Webb_998.jpg"
    })
  }, [])

  if(!apod) return "Fetching phtoto of the Day..."

  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
