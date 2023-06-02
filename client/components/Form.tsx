import { ChangeEvent, useState, FormEvent } from 'react'

import friendsSound from '../../public/sounds/sad.mp3'
import okaySound from '../../public/sounds/alright.mp3'
import greatSound from '../../public/sounds/barry-white.mp3'
import soulMateSound from '../../public/sounds/wedding-bells.mp3'

function Form() {
  const [inputOne, setInputOne] = useState('Enter your name')
  const [inputTwo, setInputTwo] = useState('Enter your crush')
  const [result, setResult] = useState('')
  const [percentage, setPercentage] = useState(0)

  const [sound, setSound] = useState('')
  const [playSound, setPlaySound] = useState(false)

  const handleInputOne = (event: ChangeEvent<HTMLInputElement>) => {
    setInputOne(event.target.value)
  }

  const handleInputTwo = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTwo(event.target.value)
  }

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const randomNum = Math.floor(Math.random() * 100) + 1
    setPercentage(randomNum)

    if (randomNum >= 0 && randomNum <= 49) {
      setResult(`${inputOne} and ${inputTwo} are better off as friends...`)
      setSound(friendsSound)
    } else if (randomNum >= 50 && randomNum <= 69) {
      setResult(`${inputOne} and ${inputTwo} are an okay match... I guess...`)
      setSound(okaySound)
    } else if (randomNum >= 70 && randomNum <= 89) {
      setResult(`${inputOne} and ${inputTwo} are a great match!`)
      setSound(greatSound)
    } else if (randomNum >= 90 && randomNum <= 100) {
      setResult(`${inputOne} and ${inputTwo} are soulmates!!!`)
      setSound(soulMateSound)
    }
    setPlaySound(true)
  }

  const handleReset = () => {
    setInputOne('Enter your name')
    setInputTwo('Enter your crush')
    setResult('')
    setPercentage(0)
    setPlaySound(false)
    setSound('')
  }

  return (
    <>
      <div className="dynamic-text">
        {result === '' ? <h2>Enter names below</h2> : <h2>{result}</h2>}
      </div>

      <div className="form-wrapper">
        <form className="loveForm" onSubmit={handleClick}>
          <div className="inputs">
            <label htmlFor="name-one"></label>
            <input
              type="text"
              name="inputOne"
              value={inputOne}
              onChange={handleInputOne}
            />

            <div className="heart">
              {percentage === 0 ? <h2></h2> : <h2>{percentage}%</h2>}
            </div>

            <label htmlFor="name-two"></label>
            <input
              type="text"
              name="inputTwo"
              value={inputTwo}
              onChange={handleInputTwo}
            />
          </div>
          <button className="calculateButton">Calculate</button>
        </form>
        <button className="calculateButton" onClick={handleReset}>
          Reset
        </button>
      </div>
      {playSound && (
        <audio controls autoPlay>
          <source src={sound} type="audio/mpeg" />
        </audio>
      )}
    </>
  )
}

export default Form
