import React, { useState, useEffect } from 'react';

const colores = {
  rojo: 'rojo',
  amarillo: ' amarillo',
  verde: 'verde'
};

const App = () => {
  const [currentColor, setCurrentColor] = useState(colores.rojo);

  useEffect(() => {
    const intervalo = setInterval(() => {
      switch (currentColor) {
        case colores.rojo:
          setCurrentColor(colores.verde);
          break;
        case colores.amarillo:
          setCurrentColor(colores.rojo);
          break;
        case colores.verde:
          setCurrentColor(colores.amarillo);
          break;
        default:
          setCurrentColor(colores.rojo);
      }
    }, 3000);

    return () => clearInterval(intervalo);
  }, [currentColor]);

return (
  <div className='semaforo'>
    <div className='luz' style={{ backgroundColor: currentColor }}/>
  </div>
);

};

export default App;
