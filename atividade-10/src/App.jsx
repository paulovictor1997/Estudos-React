import './App.css'
import Title from './componentes/Title'
import Counter from './componentes/Counter'
import useCountdown from './Hooks/useCountdown'

function App() {

  const [day,hour,minute,second] = useCountdown("Aug 6, 2023 00:00:00")

  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regressiva"/>
        <div className="contador-container">
          <Counter title="Dias" number={day}/>
          <Counter title="Horas" number={hour}/>
          <Counter title="Minutos" number={minute}/>
          <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
