import './App.css';

function App() {

  const name = 'Paulo Victor';

  function soma(a,b){
    return a + b
  }

  return (
    <div className="App">
      <h4>TESTANDO NOVAMENTE ALGUNS COMANDOS</h4>
      <p>Olá {name}, seja bem Vindo</p>
      <p>Soma é : {soma(1,2)}</p>
    </div>
  );
}

export default App;
