import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
// import { MyAwesomeApp } from './MyAwesomeApp'

/*
Se renderiza el h1 en el elemento root en index.html usando createRoot*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Las etiquetas de los componentes se autocierran */}
    <FirstStepsApp />

    {/* <MyAwesomeApp/> */}
  </StrictMode>,

  //Esto se usa para verificar que la aplicacion funciona de la forma correcta para evitar usar las cosas (ex. usar mal los efectos)
  // <StrictMode> 
  //   <h1>Hola mundo</h1>
  //   <p>Esto es un parrafo</p>
  //   <button>Click me</button>

  //   <div>
  //     <h2>Hola dentro de un div</h2>
  //   </div>
  // </StrictMode>,

  /**
   * Esto da error por que se debe regrear un unico elemento por componente y en este caso estamos retornando 4. Entonces se puede meter todo en un div en un fragment
   */
  // <h1>Hola mundo</h1>
  // <p>Esto es un parrafo</p>
  // <button>Click me</button>

  // <div>
  //    <h2>Hola dentro de un div</h2>
  // </div>
)
