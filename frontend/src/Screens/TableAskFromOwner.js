import table_1 from "../img/table_1.png";
import table_2 from "../img/table_2.png";
import table_3 from "../img/table_3.png";
import table_4 from "../img/table_4.png";
import CounterInput from "react-counter-input";
import { useState } from "react";
import { Link } from "react-router-dom";
import RoomEditor from "./RoomEditor";

export default function TableAskFromOwner() {
  const [table1,setTable1]=useState(0);
  const [table2,setTable2]=useState(0);
  const [table3,setTable3]=useState(0);
  const [table4,setTable4]=useState(0);
  return (
    <div>
      <img height="220" width="220" src={table_1} />
      <CounterInput
      
       min={0}
        max={10}
        onCountChange={(val)=>setTable1(val)}
      />
      <img height="220" width="220" src={table_2} />
      <CounterInput
      
       min={0}
        max={10}
        onCountChange={(val)=>setTable2(val)}
      />
      <img height="220" width="220" src={table_3} />
      <CounterInput
      
       min={0}
        max={10}
        onCountChange={(val)=>setTable3(val)}
      />
      <img height="220" width="220" src={table_4} />
      <CounterInput
      
       min={0}
        max={10}
        onCountChange={(val)=>setTable4(val)}
      />
      <Link to={`/roomeditor/${table1}/${table2}/${table3}/${table4}`}>
      <button >Next</button></Link>
     
    </div>
  );
}


