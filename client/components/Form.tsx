import React, { ChangeEvent, useState, FormEvent } from 'react'

function Form() {
  const [inputOne, setInputOne] = useState('Enter your name')
  const [inputTwo, setInputTwo] = useState('Enter your crush')
  let [result, setResult] = useState('')
  const [percentage, setPercentage] = useState(0)

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
      setResult(
        (result = `${inputOne} and ${inputTwo} are better off as friends...`)
      )
    } else if (randomNum >= 50 && randomNum <= 69) {
      setResult(
        (result = `${inputOne} and ${inputTwo} are an okay match... I guess...`)
      )
    } else if (randomNum >= 70 && randomNum <= 89) {
      setResult((result = `${inputOne} and ${inputTwo} are a great match!`))
    } else if (randomNum >= 90 && randomNum <= 100) {
      setResult((result = `${inputOne} and ${inputTwo} are soulmates!!!`))
    }
  }

  const handleReset = () => {
    setInputOne('Enter your name')
    setInputTwo('Enter your crush')
    setResult('')
    setPercentage(0)
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
          <button className="calculateButton" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
