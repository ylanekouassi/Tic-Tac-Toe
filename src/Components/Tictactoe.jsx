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
            <div className="Boxes" onClick={() => Display(1)}>{data[1]}</div>
            <div className="Boxes" onClick={() => Display(2)}>{data[2]}</div>
        </div>
        <div className='Line2'>
            <div className="Boxes" onClick={() => Display(3)}>{data[3]}</div>
            <div className="Boxes" onClick={() => Display(4)}>{data[4]}</div>
            <div className="Boxes" onClick={() => Display(5)}>{data[5]}</div>
        </div>
        <div className='Line3'>
            <div className="Boxes" onClick={() => Display(6)}>{data[6]}</div>
            <div className="Boxes" onClick={() => Display(7)}>{data[7]}</div>
            <div className="Boxes" onClick={() => Display(8)}>{data[8]}</div>
        </div>
    </div>
    <button>Reset</button>
</div>
  )
}

export default Tictactoe