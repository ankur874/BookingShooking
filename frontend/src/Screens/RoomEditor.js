import React, { useState } from "react";
import table_1 from "../img/table_1.png";
import table_2 from "../img/table_2.png";
import table_3 from "../img/table_3.png";
import table_4 from "../img/table_4.png";
import Draggable from "react-draggable";
import { Router, useParams } from "react-router";

{
  /* <Draggable onDrag={this.handleDrag} {...dragHandlers}>
<div className=" absolute top-2  right-0 w-28  h-28  ">
  <img height="220" width="220" src={table_1} />
</div>
</Draggable>
<Draggable onDrag={this.handleDrag} {...dragHandlers}>
<div className="box absolute top-2  right-0 w-28  h-28  ">
  <img height="220" width="220" src={table_1} />
</div>
</Draggable>
<Draggable onDrag={this.handleDrag} {...dragHandlers}>
<div className="box absolute top-2  right-0 w-28  h-28  ">
  <img height="220" width="220" src={table_1} />
</div>
</Draggable>
<Draggable onDrag={this.handleDrag} {...dragHandlers}>
<div className="box absolute top-2  right-0 w-28  h-28  ">
  <img height="220" width="220" src={table_1} />
</div>
</Draggable>
<Draggable onDrag={this.handleDrag} {...dragHandlers}>
<div className="box  absolute top-2  right-0 w-28  h-28  ">
  <img height="220" width="220" src={table_1} />
</div>
</Draggable> */
}

const RoomEditor = () => {
  const [type1, setType1] = useState([]);
  const [type2, setType2] = useState([]);
  const [type3, setType3] = useState([]);
  const [type4, setType4] = useState([]);
  const finalData=[];

  const { table1, table2, table3, table4 } = useParams();

  for (var i = 0; i < table1; i++) {
     type1.push("table1");
  }
  for (var i = 0; i < table2; i++) {
    type2.push("table2")
  }
  for (var i = 0; i < table3; i++) {
    type3.push("table3")
  }
  for (var i = 0; i < table4; i++) {
    type4.push("table4")
  }

  return (
    <div>
      {type1.map((ele) => {
        return (
          <Draggable onStop={()=>{
             
          }}>
            <div className=" absolute top-2  right-0 w-28  h-28  ">
              <img height="220" width="220" src={table_1} />
            </div>
          </Draggable>
        );
      })}
       {type2.map((ele) => {
        return (
          <Draggable>
            <div className=" absolute top-7  right-0 w-28  h-28  ">
              <img height="220" width="220" src={table_2} />
            </div>
          </Draggable>
        );
      })}
       {type3.map((ele) => {
        return (
          <Draggable>
            <div className=" absolute top-12  right-0 w-28  h-28  ">
              <img height="220" width="220" src={table_3} />
            </div>
          </Draggable>
        );
      })}
       {type4.map((ele) => {
        return (
          <Draggable>
            <div className=" absolute top-14  right-0 w-28  h-28  ">
              <img height="220" width="220" src={table_4} />
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};
export default RoomEditor;
