import { useState } from "react"
export default function Ludo(){

    let [moves,setmoves] = useState({blue:0,red:0,green:0,yellow:0}) //use state in useState
     let Blue=()=>{
       setmoves((prevMoves)=>{     // callback function
        return({...prevMoves,blue:prevMoves.blue+1})
       });
    }

    let Red = () => {
        console.log(moves.red);
        setmoves({ ...moves, red: moves.red + 1 });
    }

    let Green = () => {
        setmoves({ ...moves, green: moves.green + 1 });
    }

    let Yellow = () => {
        setmoves({ ...moves, yellow: moves.yellow + 1 });
    }

    
    return(
        <div>
        <p>Game begains:</p>
        <div>
        <h2>Blue moves:{moves.blue}</h2>
        <button onClick={Blue} style={{backgroundColor:"blue"}}>Blue</button>

            <h2>red moves:{moves.red}</h2>
                <button onClick={Red} style={{ backgroundColor: "red" }}>red</button>

            <h2>green moves:{moves.green}</h2>
                <button onClick={Green} style={{ backgroundColor: "green" }}>green</button>

            <h2>Yellow moves:{moves.yellow}</h2>
                <button onClick={Yellow} style={{ backgroundColor: "yellow",color:"black" }}>yellow</button>
            </div>
        </div>
    )
        
 
}