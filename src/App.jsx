import React from 'react'

const App = () => {
  return (
    <div className='Container'>
        <h1>Tic tac toe</h1>
        <div className='Field'>
            <div className='Line1'>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
            </div>
            <div className='Line2'>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
            </div>
            <div className='Line3'>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
                <div className="Boxes"></div>
            </div>
        </div>
        <button>Reset</button>
    </div>
  )
}

export default App