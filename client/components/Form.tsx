import React, { ChangeEvent, useState } from 'react'

function Form() {
  const [inputOne, setInputOne] = useState('Enter your name')
  const [inputTwo, setInputTwo] = useState('Enter your crush')
  const [result, setResult] = useState('')

  const handleInputOne = (event: ChangeEvent<HTMLInputElement>) => {
    setInputOne(event.target.value)
  }

  const handleInputTwo = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTwo(event.target.value)
  }

  // function handleClick() {}

  return (
    <>
      <form className="" onSubmit={handleClick}>
        <label htmlFor="name-one"></label>
        <input
          type="text"
          name="inputOne"
          value={inputOne}
          onChange={handleInputOne}
        />

        <label htmlFor="name-two"></label>
        <input
          type="text"
          name="inputTwo"
          value={inputTwo}
          onChange={handleInputTwo}
        />
        <button>Calculate</button>
      </form>
    </>
  )
}

export default Form
