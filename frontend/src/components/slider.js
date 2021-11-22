import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: #000000;
  cursor: pointer;
  outline: 3px solid #000;
  opacity: 1;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    height: 15px;
    border-radius: 6px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: 50
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <Styles className="pl-20 pr-15">
        <input type="range" min={0} max={255} value={this.state.value} className="slider" onChange={this.handleOnChange} />&nbsp;&nbsp;
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}