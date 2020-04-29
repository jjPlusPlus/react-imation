import React, { useState, useEffect } from 'react'

interface GlitchProps {
  text: string
  interval: number
  characters?: string
  glitchCharacters?: Array<string>
}

const StringGlitch = (props: GlitchProps) => {

  const config = {
    text: "glitch",
    interval: 100,
    glitchCharacters: ["#", "%", "@", "#", "$", "!", "*", "&", "^", "*", "A", "B", "C", "D", "E", "G", "L", "I", "T", "C", "H"],
    ...props
  }

  const [formattedString, setNewString] = useState(config.glitchCharacters)
  const [count, setCount] = useState(0)

  // set up the initial glitched string
  let seed = []
  for (var n = 0; n < config.text.length; n++) {
    const characterIndex = Math.floor(Math.random() * config.glitchCharacters.length)
    const character = config.glitchCharacters[characterIndex]
    seed.push(character)
  }
  const [formatted, setFormatted] = useState(seed)

  /* Change each letter n times where n is the position of the letter in the string */
  useEffect(() => {
    let changeInterval = setInterval(() => {
      // for each letter
      for (var i = 0; i < config.text.length; i++) {

        // if the index is less than count, do nothing
        if (i < count) {
          // do nothing
        } else if (i === count) {
          // if this is the current letter, set it to the correct letter
          formatted[i] = config.text[i]
          setFormatted(formatted)
        } else if (count <= config.text.length) {
          // select a random character
          const characterIndex = Math.floor(Math.random() * config.glitchCharacters.length)
          const character = config.glitchCharacters[characterIndex]
          // swap out that character at index
          formatted[i] = character
          setFormatted(formatted)
        }
      }
      count >= config.text.length + 8 ? setCount(0) : setCount(count + 1)
      setNewString(formatted)
    }, config.interval)

    return () => clearInterval(changeInterval)
  }, [formattedString, config.text, config.glitchCharacters, config.interval, count, formatted])

  return (
    <span>{formattedString}</span>
  )
}
export default StringGlitch
