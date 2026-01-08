import React from 'react'
import Counter from './componets/Counter'
import InputDemo from './componets/InputDemo'
import ToggleDiv from './componets/ToggleDiv'
import List from './componets/List'
import LoginForm from './componets/LoginForm'
import MultiInputForm from './componets/MultiInputForm'
import PrevCounter from './componets/PrevCounter'
import CheckboxDemo from './componets/CheckboxDemo'

const App = () => {
  const colors = ["red", "green"]
  return (
    <div>
      <Counter/>
      <InputDemo/>
      <ToggleDiv/>
      <List items={colors}/>
      <LoginForm />
      <MultiInputForm/>
      <PrevCounter/>
      <CheckboxDemo/>
    </div>
  )
}

export default App