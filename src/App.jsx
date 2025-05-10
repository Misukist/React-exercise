import {useState} from 'react'

const App = (props) => {

  const [value, setValue] = useState(10) 

  const setToValue = (newValue) => {
    console.log('valuenow', newValue)
    setValue(newValue)
  }

  const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
  )

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}


export default App