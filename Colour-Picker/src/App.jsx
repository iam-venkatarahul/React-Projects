import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setbackgroundColor] = useState('#ffffff')
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  
  const handlecolorChange = (color) => {
    setbackgroundColor(color);
  };

  return (
    <>
      <div className='app-container' style={{ backgroundColor }}>
        <h1>Colour Picker</h1>
        <div className='color-palette'>
          {
            colors.map((color, index) => (
              <div
                key={index}
                className='color-box'
                style={{ backgroundColor: color }}
                onClick={() => handlecolorChange(color)}
              ></div>
            ))
          }
          <div className='custom-color-palette'>
            <input type='color'
              onChange={(e) => handlecolorChange(e.target.value)}
              style={{ width: '50px', height: '50px', border: 'none', cursor: 'pointer' }}
            />  
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
