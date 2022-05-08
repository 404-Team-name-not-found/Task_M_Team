import { Droplist } from '@dev-club/ds';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
const Filter = (props)=>{

    const [selection,setSelect] = useState();
    const [values,setValues] = useState(props.arr);

    function handleCahnge(e){
        setSelect(e.target.value);
        props.changeCategoryValue(props.text,e.target.value);
    }

    return(
<>
        <p key={uuidv4()}>{props.text}</p>
          <select name={props.text} key={uuidv4()} value={selection} onChange={handleCahnge}>
            {values.map((value)=><option key={uuidv4()} value={value.text} >{value.text}</option>)}
          </select>
</>

          

    )
}
export default Filter