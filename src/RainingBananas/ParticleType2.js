import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const SIZE_RANGE = [15, 45];
const ROTATION_RANGE = [-15, 15];

class ParticleType2 extends React.PureComponent {

    constructor(props) {
      super(props);
      const size = generateWholeNumber(...SIZE_RANGE);
      this.style = {
        // fill: generateRandomColor(),
        width: size,
        height: size,
        transform: `rotateZ(${generateWholeNumber(
          ...ROTATION_RANGE
        )}deg)`,
        left: generateWholeNumber(0, window.innerWidth),
        top: generateWholeNumber(-TOP_OFFSET, 0),
      };
    }
  
    componentDidMount() {
      const { left } = this.style;
      setTimeout(() => {
        const node = ReactDOM.findDOMNode(this.ref);
        node.style.top =
          window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + "px";
        node.style.left =
          left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + "px";
        node.style.transform = `rotateZ(${generateWholeNumber(
          ...ROTATION_RANGE
        )}deg)`;
      }, 0);
    }
  
    render() {
      return (
        // <SvgBanana1 styleProps={this.style}/>
        <svg
          id="Banana1_svg__Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          ref={(ref) => (this.ref = ref)}
          className="particle"
          style={this.style}
        >
          <defs>
            <style>
              {
                ".Banana1_svg__cls-1{fill:#ac752c}.Banana1_svg__cls-2{fill:#7d551f}"
              }
            </style>
          </defs>
          <path
            className="Banana1_svg__cls-1"
            d="M354.43 191.56l-13.8-1 2-27.24a5.13 5.13 0 015.48-4.74l3.59.27a5.13 5.13 0 014.74 5.48z"
          />
          <path
            className="Banana1_svg__cls-2"
            d="M354.43 191.56l-6.9-.5 2.37-32.36 1.79.14a5.13 5.13 0 014.74 5.48z"
          />
          <path
            d="M365.73 204a139.68 139.68 0 01-217.09 114c-.78-.6-7.78-6.14-11.72-13.52-1.95-3.66-3.15-7.76-2.45-11.92v-.07a8.36 8.36 0 01.36-1.35 6.09 6.09 0 01.66-1.2c2-3 6.54-4.5 12.12-5.11 12.21-1.37 29.5 1.47 36.91 1.85h.06c1.79.17 3.59.31 5.38.41a1.56 1.56 0 01.3 0c2 .09 3.93.16 5.89.17H201c.69 0 1.39 0 2.08-.05 1.34 0 2.68-.12 4-.22.77-.05 1.54-.11 2.3-.19 2.1-.16 4.17-.38 6.24-.67.66-.07 1.31-.16 1.94-.26s1.31-.2 1.95-.3q2.9-.46 5.76-1.05a2.93 2.93 0 00.41-.07l.51-.11q4.22-.88 8.31-2c2.59-.7 5.16-1.5 7.72-2.36l1-.34.38-.13q2.52-.89 5-1.87c.16-.06.34-.12.49-.19l.63-.26a133.18 133.18 0 0013.85-6.49c.88-.45 1.73-.93 2.58-1.42s1.63-.91 2.44-1.4l.42-.24 1.35-.83c1.33-.79 2.63-1.63 3.94-2.48.65-.44 1.3-.88 2-1.31 1-.69 2-1.37 2.95-2.08.38-.27.75-.56 1.12-.83 1.33-.95 2.64-2 3.93-3a136.82 136.82 0 0016.09-15 3.57 3.57 0 00.27-.28q2.85-3.09 5.5-6.39c.82-1 1.64-2 2.44-3.1.63-.83 1.28-1.68 1.9-2.54l.35-.48c1.33-1.85 2.62-3.74 3.87-5.69a139 139 0 0016.16-34.49c.4-1.32.78-2.65 1.15-4s.16-.39.48-1l.32-.59.21-.33c.06-.11.14-.22.22-.34a17.34 17.34 0 018-6.8 18.14 18.14 0 0111.36-.38c4.45 1.18 7.41 4.48 9.34 8.56 3.2 6.35 3.75 14.74 3.77 19.74z"
            fill="#ffb300"
          />
          <path
            d="M352.73 175.64v.24a139.72 139.72 0 01-4.87 37.66c-.44 1.66-.93 3.33-1.44 5a139.68 139.68 0 01-205.27 78.16c-1.37-.83-2.76-1.7-4.09-2.57-.87-.54-1.72-1.12-2.55-1.69a8.36 8.36 0 01.36-1.35 6.09 6.09 0 01.66-1.2c2-3 6.54-4.5 12.12-5.11 12.21-1.37 29.5 1.47 36.91 1.85h.06c1.79.17 3.59.31 5.38.41a1.56 1.56 0 01.3 0c2 .09 3.93.16 5.89.17h4.9c.69 0 1.39 0 2.08-.05 1.35-.06 2.69-.14 4-.22.77-.05 1.54-.11 2.3-.19 1.31-.11 2.62-.23 3.92-.39l2.32-.28 1.94-.26c.66-.09 1.31-.2 1.95-.3q2.9-.46 5.76-1.05a2.93 2.93 0 00.41-.07l.51-.11 1.5-.34q3.43-.76 6.81-1.69c2.26-.63 4.49-1.32 6.71-2l1-.32 1-.34.38-.13c1-.37 2.08-.76 3.1-1.16.65-.24 1.28-.46 1.92-.71.16-.06.34-.12.49-.19l.63-.26c.9-.36 1.8-.74 2.7-1.12l1.95-.86.89-.4c.93-.43 1.85-.86 2.76-1.3s1.69-.83 2.54-1.26 2-1 3-1.55 1.71-.94 2.58-1.42l2.44-1.4.42-.24 1.35-.83c1.33-.79 2.63-1.63 3.94-2.48.65-.44 1.3-.88 2-1.31 1-.69 2-1.37 2.95-2.08.38-.27.75-.56 1.12-.83l1.12-.85c.94-.71 1.89-1.4 2.81-2.13.75-.6 1.5-1.23 2.25-1.86s1.76-1.44 2.62-2.2l1.3-1.15 1-.91c.77-.7 1.53-1.4 2.29-2.12s1.54-1.48 2.3-2.23 1.2-1.22 1.79-1.83c.85-.88 1.7-1.75 2.52-2.65a3.57 3.57 0 00.27-.28c.77-.84 1.52-1.72 2.28-2.57.48-.56 1-1.11 1.43-1.67.6-.71 1.2-1.42 1.79-2.15s1-1.3 1.52-1.95c.3-.37.62-.75.92-1.15.63-.83 1.28-1.68 1.9-2.54l.35-.48 1.48-2.12c.41-.58.79-1.18 1.18-1.77l1.21-1.8c.56-.86 1.09-1.74 1.63-2.61.29-.47.57-.94.85-1.42.69-1.14 1.38-2.29 2-3.46.44-.78.87-1.55 1.29-2.34.61-1.17 1.23-2.35 1.83-3.52l1.17-2.42c.57-1.22 1.14-2.45 1.69-3.71.35-.79.7-1.56 1-2.36.59-1.38 1.14-2.78 1.67-4.18.21-.55.42-1.08.62-1.62l.24-.65q1.13-3.06 2.11-6.2c.4-1.32.78-2.65 1.15-4s.16-.39.48-1l.32-.59.21-.33c.06-.11.14-.22.22-.34a17.34 17.34 0 018-6.8 18.14 18.14 0 0111.46-.47z"
            fill="#ffd54f"
          />
          <path
            className="Banana1_svg__cls-2"
            d="M147.67 284.74c-6.9 4.82-10.88 11.17-10.75 19.69-1.95-3.66-3.15-7.76-2.45-11.92v-.07a8.36 8.36 0 01.36-1.35 6.09 6.09 0 01.66-1.2c2.08-3.04 6.6-4.54 12.18-5.15z"
          />
          <path
            className="Banana1_svg__cls-1"
            d="M147.67 284.74a24.92 24.92 0 00-9 10.42c-.56-.34-1.1-.7-1.65-1.06-.86-.54-1.71-1.12-2.54-1.68a8.67 8.67 0 01.37-1.35 8.28 8.28 0 01.66-1.21c2.07-3.02 6.58-4.51 12.16-5.12z"
          />
        </svg>
      );
    }
  }

export default ParticleType2;