import React, { useState, useEffect } from 'react';

interface TyperProps {
  text: string
  delay: number
  interval: number
}
const Typer = (props: TyperProps) => {

  const config = {
    text: "Hello World",
    interval: 200,
    delay: 1000,
    ...props
  }

  const { text, interval, delay } = config

  const [show, setShow] = useState("")
  const [mounted, setMounted] = useState(true)

  const spacebar = new Audio('https://raw.githubusercontent.com/yingDev/Tickeys/master/Tickeys.app/Contents/Resources/data/Cherry_G80_3494/G80-3494_space.wav')
  const slowkey = new Audio('https://raw.githubusercontent.com/yingDev/Tickeys/master/Tickeys.app/Contents/Resources/data/Cherry_G80_3494/G80-3494_slow1.wav')
  const fastkey = new Audio('https://raw.githubusercontent.com/yingDev/Tickeys/master/Tickeys.app/Contents/Resources/data/Cherry_G80_3494/G80-3494_fast1.wav')
  const midkey = new Audio('https://raw.githubusercontent.com/yingDev/Tickeys/master/Tickeys.app/Contents/Resources/data/Cherry_G80_3494/G80-3494_enter.wav')

  const timeout = (ms: number) => new Promise(res => setTimeout(res, ms))

  useEffect(() => {
    _animateType()
    return () => {
      spacebar.pause()
      slowkey.pause()
      fastkey.pause()
      midkey.pause()
      setMounted(false)
    }
  }, [])

  const _animateType = async () => {

    await timeout(delay)

    let key: number

    for (var i = 0; i < text.length; i++) {

      if (!mounted) { return }

      await timeout(interval)

      // get text between 0 and i
      setShow(text.substring(0, i + 1))

      key = Math.floor(Math.random() * 3) + 1

      if (text[i] === " ") {
        spacebar.play()
      } else {
        switch (key) {
          case 1:
            slowkey.play()
            break
          case 2:
            fastkey.play()
            break
          case 3:
            midkey.play()
            break
          default:
            break
        }
      }
    }
    return;
  }

  return (
    <span>
      {show}
    </span>
  )
}

export default Typer
