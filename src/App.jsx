import { useState } from 'react'
import './App.css'
import RegisraFormulario from './form/formulario'

function App() {
  const [isFormsubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  }


  return (
    <>
      <h1>Formulario de Registro</h1>
      <div className='formulario'>
      <RegisraFormulario onSubmit={handleFormSubmit}/>
      {isFormsubmitted && <span>Mensagem de confirmação: Seu Registro foi enviado com sucesso!!</span>}
      </div>
    </>
  )
}

export default App
