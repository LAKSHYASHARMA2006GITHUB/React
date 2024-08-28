import { useState } from "react";

export default function Like() {

    let [Click, setClick] = useState(false);
    let [like,setlike] = useState(0);
    let Clicked = () => {
        setClick(!Click);
        setlike(like+1);
    };

    let LikeStyle ={ color:"Red" };
    return (
        <div>
            <h1>States in react</h1>
            <p>click ={like}</p>
            <p onClick={Clicked}>

                {Click ? (<i className="fa-solid fa-heart" style={LikeStyle}></i>)
                    : (<i className="fa-regular fa-heart"></i>)
                }

            </p>
        </div>
    )
}