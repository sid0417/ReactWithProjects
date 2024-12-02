import Display from "./Component/Display"
import style from "./App.module.css"
import ButtonContainer from "./Component/ButtonContainer"

function App() {

  return (
    <div className={style.calculator}>
    <Display></Display>
    <ButtonContainer></ButtonContainer>
    </div>
 
  )
}

export default App
