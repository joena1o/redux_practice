import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {changeColor} from '../Features/theme'

function ChangeColor() {

    const dispatch = useDispatch();
    const [color, setColor] = useState("");

    return (
        <div>
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={()=>{dispatch(changeColor(color))}}>ChangeColor</button>
        </div>
    )
}

export default ChangeColor