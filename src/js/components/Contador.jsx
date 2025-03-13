import React, { useState, useEffect } from 'react';

function Contador() {

  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countType] = useState('up');

  useEffect(() => {
    let timer = null;
    
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => {
          if (countType === 'up') {
            return prevCount + 1;
          } else {
            return prevCount > 0 ? prevCount - 1 : 0;
          }
        });
      }, 1000);
    }
    

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, countType]);
  

  const formattedCount = count.toString().padStart(6, '0');
  

  function startCounter() {
    setIsRunning(true);
  }
  
  function pauseCounter() {
    setIsRunning(false);
  }
  
  function resetCounter() {
    setIsRunning(false);
    setCount(countType === 'up' ? 0 : 999999);
  }
  
  
  return (
    <div>
      {/* Contenedor */}
      <div style={{
        display: 'flex',
        background: 'black',
        padding: '10px',
        borderRadius: '5px',
      }}>
        {/* reloj */}
        <div style={{
          color: 'white',
          fontSize: '40px',
          marginRight: '10px'
        }}>⏱️</div>
        
        {/* numeros */}
        {formattedCount.split('').map((digit, index) => (
          <div 
            key={index} 
            style={{
              background: 'black',
              color: 'white',
              fontSize: '40px',
              fontFamily: 'monospace',
              margin: '0 5px',
              padding: '5px',
              width: '40px',
              textAlign: 'center'
            }}
          >
            {digit}
          </div>
        ))}
      </div>
      
      {/* botones */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: '10px',
        alignItems: 'center'
      }}>
        <button 
          onClick={startCounter}
          style={{
            background: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Iniciar
        </button>
        
        <button 
          onClick={pauseCounter}
          style={{
            background: '#FFEB3B',
            color: 'black',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Pausar
        </button>
        
        <button 
          onClick={resetCounter}
          style={{
            background: '#F44336',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Contador;