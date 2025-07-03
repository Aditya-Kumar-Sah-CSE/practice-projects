// single selection 

import { useState } from "react";
import data from "./data";
// ? multiple selection 
export default function Accordion(){
const [selected,setSelected] = useState(null);
    return <div className="wrapper">
        <div className="accordion">
        {
data && data.length > 0 ? 
data.map(dataItem => <data className="item">
    <div className="title">
        <h3>{dataItem.question}</h3>
        <span>+</span>
    </div>
</data>):(<div>no data found !</div> )
       } 
       </div>
    </div>
}

