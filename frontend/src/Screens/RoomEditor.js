import React, { useState } from "react";
import table_1 from "../img/table_1.png";
import Draggable from "react-draggable";
import { useParams } from "react-router";
// const {ReactDraggable: Draggable, React, } = window;

class RoomEditor1 extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };
  onDrop = (e) => {
    this.setState({ activeDrags: --this.state.activeDrags });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  onDropAreaMouseEnter = (e) => {
    if (this.state.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    console.log("props", this.props.location);
    // console.log('state',state);

    return (
      <div className="w-sceen h-screen relative bg-gray-500">
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className=" absolute top-2  right-0 w-28  h-28  ">
            <img height="220" width="220" src={table_1} />
          </div>
        </Draggable>
      </div>
    );
  }
}
{
  /* <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div> */
}
// class RemWrapper extends React.Component {
//   // PropTypes is not available in this environment, but here they are.
//   // static propTypes = {
//   //   style: PropTypes.shape({
//   //     transform: PropTypes.string.isRequired
//   //   }),
//   //   children: PropTypes.node.isRequired,
//   //   remBaseline: PropTypes.number,
//   // }

//   translateTransformToRem(transform, remBaseline = 16) {
//     const convertedValues = transform.replace('translate(', '').replace(')', '')
//       .split(',')
//       .map(px => px.replace('px', ''))
//       .map(px => parseInt(px, 10) / remBaseline)
//       .map(x => `${x}rem`)
//     const [x, y] = convertedValues

//     return `translate(${x}, ${y})`
//   }

//   render() {
//     const { children, remBaseline = 16, style } = this.props
//     const child = React.Children.only(children)

//     const editedStyle = {
//       ...child.props.style,
//       ...style,
//       transform: this.translateTransformToRem(style.transform, remBaseline),
//     }

//     return React.cloneElement(child, {
//        ...child.props,
//        ...this.props,
//        style: editedStyle
//     })
//   }

// }

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
  const [activeDrags, setActiveDrags] = useState(0);
  const { table1, table2, table3, table4 } = useParams();
  const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
  // handleDrag = (e, ui) => {
  //   const { x, y } = this.state.deltaPosition;
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX,
  //       y: y + ui.deltaY,
  //     },
  //   });
  // };

  // onStart = () => {
  //   this.setState({ activeDrags: ++this.state.activeDrags });
  // };

  // onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };
  // onDrop = (e) => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  //   if (e.target.classList.contains("drop-target")) {
  //     alert("Dropped!");
  //     e.target.classList.remove("hovered");
  //   }
  // };
  // onDropAreaMouseEnter = (e) => {
  //   if (this.state.activeDrags) {
  //     e.target.classList.add("hovered");
  //   }
  // };
  // onDropAreaMouseLeave = (e) => {
  //   e.target.classList.remove("hovered");
  // };

  for (var i = 0; i < table1; i++) {
    setType1(type1.push("12"));
  }
  for (var i = 0; i < table2; i++) {
    setType2(type2.push("adf"));
  }
  for (var i = 0; i < table3; i++) {
    setType3(type3.push("daf"));
  }
  for (var i = 0; i < table4; i++) {
    setType4(type4.push("adf"));
  }

  return (
    <div>
      {" "}
      <Draggable onDrag={this.handleDrag} {...dragHandlers}>
        <div className=" absolute top-2  right-0 w-28  h-28  ">
          <img height="220" width="220" src={table_1} />
        </div>
      </Draggable>
    </div>
  );
};
export default RoomEditor;
