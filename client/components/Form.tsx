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

  function handleClick() {}

  return (
    <>
      <div className="form-wrapper">
        <form className="loveForm" onSubmit={handleClick}>
          <div className='inputs'>
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
          </div>
          <button className='calculateButton'>Calculate</button>
        </form>
      </div>
    </>
  )
}

export default Form
