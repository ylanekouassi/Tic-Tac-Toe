import React, {useState} from 'react'



const Tictactoe = () => {

const [data, setData] = useState(Array(9).fill(""));
const [current, setCurrent]= useState("X");

const Display = (index) => {

    const Field = data;
    Field[index] = current;
    setData(Field);
    if(current === "X"){
        setCurrent("O")
    } else {
        setCurrent("X")
    }
}

  return (
    <div className='Container'>
    <h1>Tic tac toe</h1>
    <div className='Field'>
        <div className='Line1'>
            <div className="Boxes" onClick={() => Display(0)}>{data[0]}</div>
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

export default Tictactoe