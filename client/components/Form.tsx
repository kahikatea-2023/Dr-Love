import React, { ChangeEvent, useState, FormEvent } from 'react'

function Form() {
  const [inputOne, setInputOne] = useState('Enter your name')
  const [inputTwo, setInputTwo] = useState('Enter your crush')
  let [result, setResult] = useState('')
  let [percentage, setPercentage] = useState(0)

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

  return (
    <>
      <div>
        {result === '' ? <h1>enter names below</h1> : <h1>{result}</h1>}
      </div>

      <form className="" onSubmit={handleClick}>
        <label htmlFor="name-one"></label>
        <input
          type="text"
          name="inputOne"
          value={inputOne}
          onChange={handleInputOne}
        />

        <div>{percentage === 0 ? <h1></h1> : <h1>{percentage}</h1>}</div>

        <label htmlFor="name-two"></label>
        <input
          type="text"
          name="inputTwo"
          value={inputTwo}
          onChange={handleInputTwo}
        />
        <button>Calculate</button>
      </form>

      <button>Reset</button>
    </>
  )
}

export default Form
