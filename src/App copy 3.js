import React, { useEffect, useState, useRef } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

function App() {

const id = 1;

const[particles, setParticles] = useState([])

const clean =(id) => {
  setParticles(particles.filter(_id => _id !== id))
}

const handleOnClick = () => {
  const id = App.id;
  App.id++;
  
  setParticles([particles, id])
  setTimeout(() => {
    clean(id);
  }, 5000);
}
  const {innerWidth} = window
  
    return (
      <div className='app'>
        {particles.map(id => (
          <Particles key={id} count={Math.floor(innerWidth / 20)}/>
        ))}
        <div className='button' onClick={handleOnClick}>
        🍌 Banana Time</div>
        
      </div>
  );
}

export default App;

const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const CircularParticle = () => {

  const bananaRef4 = useRef();
  
  const SIZE_RANGE = [20, 70];
  const ROTATION_RANGE = [0, 45];

    const size = generateWholeNumber(...SIZE_RANGE);
    const style = {
      width: size,
      height: size,
      borderRadius: size,
      transform: `rotateZ(${generateWholeNumber(ROTATION_RANGE)}deg)`,
      left: generateWholeNumber(0, window.innerWidth),
      top: generateWholeNumber(-TOP_OFFSET, 0)
    };

  useEffect(()=>{
    const {left} = style;
    const {ROTATION_RANGE} = CircularParticle;
    setTimeout(() => {
      if (bananaRef4.current) {
      const node = bananaRef4.current;
      node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
      node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
      }
    },0);
},[bananaRef4.current])

  
    return (
        <Banana4 style={style} bananaRef={bananaRef4}/>
    );
  }

const SquiggleParticle = () => {

  const bananaRef1 = useRef();

  const SIZE_RANGE = [15, 45];
  const ROTATION_RANGE = [-15, 15];

    const size = generateWholeNumber(SIZE_RANGE);
    
    const style = {
      width: size,
      height: size,
      transform: `rotateZ(${generateWholeNumber(ROTATION_RANGE)}deg)`,
      left: generateWholeNumber(0, window.innerWidth),
      top: generateWholeNumber(-TOP_OFFSET, 0)
    };

    useEffect(()=>{
        const {left} = style;
        const {ROTATION_RANGE} = SquiggleParticle;

        setTimeout(() => {
          if (bananaRef1.current) {
          const node = bananaRef1.current
          node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
          node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
          node.style.transform = `rotateZ(${generateWholeNumber(ROTATION_RANGE)}deg)`;
        }
      },0);
    },[bananaRef1.current])

    return (
      <Banana1 style={style} bananaRef1={bananaRef1}/>
      )
}

const Particles = (props) => {
  
    let {count: n} = props;
    const particles = [];
    const types = [SquiggleParticle, CircularParticle, CircularParticle];
    
    while(n--) {
      const Particle = types[generateWholeNumber(0,3)];
      particles.push(
        <Particle key={n}/>
      );
    }
    
    return (
      <div className='particles'>
        {particles}
      </div>
    );
  }


const Banana1 = ({bananaRef1, style}) => {
 return (
    <svg
      id="Banana1_svg__Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      ref={bananaRef1} 
      className='particle'
      style={style}
    >
      <defs>
        <style>
          {".Banana1_svg__cls-1{fill:#ac752c}.Banana1_svg__cls-2{fill:#7d551f}"}
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

const Banana2 = ({bananaRef2, style}) => {
 return (
    <svg
      id="Banana1_svg__Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      ref={bananaRef2} 
      className='particle'
      style={style}
    >
       <defs>
        <style>
          {
            ".Banana2_svg__cls-2{fill:#7d551f}.Banana2_svg__cls-3{fill:#ffb300}.Banana2_svg__cls-4{fill:#ffd54f}"
          }
        </style>
      </defs>
      <path
        d="M346.72 160.24l-24.56-1.8 2-27.25c.21-2.82 4.44-4.81 9.46-4.44l6.39.47c5 .37 8.92 2.95 8.72 5.77z"
        fill="#ac752c"
      />
      <path
        className="Banana2_svg__cls-2"
        d="M346.72 160.24l-12.28-.9 2.37-32.34 3.2.24c5 .37 8.91 2.95 8.71 5.77z"
      />
      <path
        className="Banana2_svg__cls-3"
        d="M353.14 173.47a139.66 139.66 0 01-217.09 114c-.77-.59-7.78-6.13-11.72-13.51-2-3.66-3.14-7.76-2.44-11.92v-.07a9.55 9.55 0 01.37-1.35 6.66 6.66 0 01.66-1.2c2-3 6.55-4.5 12.12-5.11 12.21-1.37 29.5 1.47 36.91 1.85h.07c1.78.17 3.58.31 5.38.4h.3c2 .09 3.92.16 5.88.17H188.43c.7 0 1.39 0 2.08-.05 1.34-.05 2.68-.13 4-.23.77 0 1.54-.1 2.3-.18 2.1-.16 4.17-.38 6.25-.67.66-.07 1.3-.16 1.93-.26s1.32-.2 1.95-.3c1.93-.31 3.86-.66 5.77-1.05a2.79 2.79 0 00.4-.07l.51-.11q4.22-.88 8.31-2a126.7 126.7 0 007.72-2.35l1-.34.39-.13c1.67-.59 3.35-1.21 5-1.87l.5-.19.62-.26a134.31 134.31 0 0013.93-6.67c.87-.45 1.72-.93 2.57-1.42s1.63-.91 2.44-1.4l.42-.24 1.35-.83c1.34-.79 2.63-1.63 3.94-2.48l2-1.31c1-.69 2-1.37 3-2.08.38-.27.75-.56 1.12-.83 1.33-.95 2.64-2 3.93-3a136.82 136.82 0 0016.09-15l.27-.28q2.85-3.09 5.5-6.39c.83-1 1.64-2 2.44-3.1.64-.83 1.29-1.68 1.9-2.54l.35-.48c1.33-1.85 2.63-3.74 3.87-5.69a138.61 138.61 0 0016.16-34.49c.41-1.32.78-2.65 1.15-4s.16-.39.48-1l.32-.59.21-.33c.06-.11.15-.22.22-.34a17.4 17.4 0 018-6.8 18.15 18.15 0 0111.36-.38c4.46 1.18 7.41 4.48 9.35 8.56 3.04 6.54 3.59 14.89 3.61 19.91z"
      />
      <path
        className="Banana2_svg__cls-4"
        d="M340.14 145.13v.24a139.33 139.33 0 01-4.87 37.63c-.44 1.66-.93 3.32-1.44 5a139.68 139.68 0 01-205.27 78.16c-1.37-.83-2.76-1.7-4.09-2.57-.87-.54-1.72-1.12-2.55-1.69a9.55 9.55 0 01.37-1.35 6.66 6.66 0 01.66-1.2c2-3 6.55-4.5 12.12-5.11 12.21-1.37 29.5 1.47 36.91 1.85h.07c1.78.17 3.58.31 5.38.4h.3c2 .09 3.92.16 5.88.17H188.46c.7 0 1.39 0 2.08-.05l4-.23c.77 0 1.54-.1 2.3-.18q2-.17 3.93-.39l2.32-.28 1.93-.26c.66-.09 1.32-.2 1.95-.3 1.93-.31 3.86-.66 5.77-1.05a2.79 2.79 0 00.4-.07l.51-.11 1.5-.34c2.29-.51 4.56-1.07 6.81-1.7s4.49-1.31 6.71-2l1-.32 1-.34.39-.13c1.05-.37 2.07-.76 3.1-1.16.64-.24 1.27-.46 1.91-.71l.5-.19.62-.26c.9-.36 1.8-.74 2.7-1.13l2-.85.88-.4c.93-.43 1.85-.86 2.76-1.3s1.69-.83 2.54-1.26c1-.51 2-1 3-1.55l2.57-1.42 2.44-1.4.42-.24 1.35-.83c1.34-.79 2.63-1.63 3.94-2.48l2-1.31c1-.69 2-1.37 3-2.08.38-.27.75-.56 1.12-.83l1.12-.85c.94-.71 1.89-1.4 2.81-2.13.75-.6 1.5-1.23 2.25-1.86s1.76-1.44 2.62-2.2l1.3-1.15 1-.91c.77-.7 1.53-1.4 2.29-2.12s1.55-1.48 2.3-2.23 1.2-1.22 1.79-1.83c.85-.88 1.7-1.75 2.52-2.65l.27-.28c.78-.84 1.53-1.72 2.28-2.57.48-.56 1-1.11 1.43-1.67.6-.71 1.2-1.42 1.79-2.15s1-1.3 1.52-2c.3-.37.62-.76.92-1.15.64-.83 1.29-1.68 1.9-2.54l.35-.48 1.48-2.12c.42-.58.79-1.18 1.18-1.77l1.21-1.8c.56-.86 1.1-1.74 1.64-2.61l.84-1.42c.7-1.14 1.38-2.29 2-3.46.43-.79.86-1.55 1.28-2.34.61-1.17 1.23-2.35 1.83-3.52.38-.79.78-1.61 1.18-2.42.57-1.22 1.13-2.45 1.68-3.71.35-.79.7-1.56 1-2.36.59-1.38 1.14-2.78 1.67-4.18.21-.55.42-1.08.62-1.62l.24-.65c.75-2.05 1.45-4.11 2.11-6.2.41-1.32.78-2.65 1.15-4s.16-.39.48-1l.32-.59.21-.33c.06-.11.15-.22.22-.34a17.4 17.4 0 018-6.8 18.15 18.15 0 0111.43-.37z"
      />
      <path
        className="Banana2_svg__cls-2"
        d="M135.08 254.23c-6.9 4.82-10.88 11.17-10.75 19.69-2-3.66-3.14-7.76-2.44-11.92v-.07a9.55 9.55 0 01.37-1.35 6.66 6.66 0 01.66-1.2c2.08-3.05 6.59-4.54 12.16-5.15z"
      />
      <path
        className="Banana2_svg__cls-3"
        d="M358.67 162.28a139.66 139.66 0 01-125 210.92c-1-.1-9.84-1.14-17.06-5.36-3.58-2.09-6.75-4.95-8.34-8.86v-.07a9.29 9.29 0 01-.39-1.34 6.3 6.3 0 01-.07-1.37c.15-3.62 3.21-7.26 7.64-10.71 9.67-7.57 25.88-14.23 32.39-17.79q2.42-1.19 4.79-2.48l.26-.14q2.59-1.41 5.11-2.94l1.5-.9 1.32-.84c.43-.26.86-.55 1.29-.84s1.16-.74 1.74-1.13c1.11-.74 2.21-1.51 3.31-2.3.63-.45 1.25-.9 1.86-1.37 1.71-1.24 3.35-2.51 5-3.84.52-.41 1-.82 1.51-1.25s1-.85 1.5-1.27c1.48-1.28 2.94-2.58 4.36-3.92a3.85 3.85 0 00.3-.27l.38-.36q3.12-3 6-6.1c1.84-1.95 3.61-4 5.33-6l.67-.81.26-.32c1.12-1.38 2.21-2.78 3.29-4.21l.32-.43c.13-.17.26-.36.39-.54a134.78 134.78 0 008.39-12.8c.51-.84 1-1.7 1.45-2.56s.91-1.63 1.35-2.47l.22-.43c.24-.46.49-.94.71-1.41.73-1.38 1.39-2.77 2.06-4.18.33-.72.65-1.43 1-2.14.49-1.11 1-2.2 1.42-3.32.18-.43.35-.87.52-1.3.63-1.5 1.22-3.05 1.78-4.6a136 136 0 005.86-21.16c0-.12.06-.27.08-.39q.81-4.12 1.33-8.32c.18-1.28.33-2.6.45-3.92.11-1 .21-2.1.28-3.16 0-.2 0-.41.05-.59q.25-3.4.31-6.88a138.66 138.66 0 00-4.34-37.83c-.34-1.34-.72-2.67-1.11-4s-.07-.41-.11-1.09v-1.06-.41a17.3 17.3 0 013.27-10 18.09 18.09 0 019.46-6.28c4.41-1.33 8.66-.07 12.45 2.39 5.96 3.67 10.79 10.47 13.46 14.75z"
      />
      <path
        className="Banana2_svg__cls-4"
        d="M332.73 145l.13.2a139.72 139.72 0 0115.62 34.61q.74 2.47 1.38 5A139.64 139.64 0 01216.12 359h-4.83c-1 0-2-.05-3.06-.1a9.29 9.29 0 01-.39-1.34 6.3 6.3 0 01-.07-1.37c.15-3.62 3.21-7.26 7.64-10.71 9.67-7.57 25.88-14.23 32.39-17.79q2.42-1.19 4.79-2.48l.26-.14q2.59-1.41 5.11-2.94c.15-.08.32-.17.47-.27l1-.63 1.32-.84 1.29-.84c.58-.37 1.16-.74 1.74-1.13 1.12-.76 2.21-1.53 3.31-2.3.63-.45 1.25-.9 1.86-1.37 1.06-.78 2.11-1.58 3.14-2.39.62-.48 1.22-1 1.83-1.45l1.51-1.25c.51-.42 1-.85 1.5-1.27 1.48-1.28 2.94-2.58 4.36-3.92a3.85 3.85 0 00.3-.27l.38-.36 1.1-1.08c1.68-1.64 3.32-3.3 4.91-5s3.13-3.47 4.64-5.25l.69-.8.67-.81.26-.32c.7-.86 1.36-1.73 2-2.61l1.26-1.6.32-.43c.13-.17.26-.36.39-.54.58-.79 1.15-1.58 1.71-2.38l1.22-1.76.54-.8c.56-.85 1.12-1.7 1.67-2.55s1-1.6 1.5-2.41 1.18-1.93 1.75-2.9 1-1.7 1.45-2.56l1.35-2.47.22-.43c.24-.46.49-.94.71-1.41.73-1.38 1.39-2.77 2.06-4.18.33-.72.65-1.43 1-2.14.49-1.11 1-2.2 1.42-3.32.18-.43.35-.87.52-1.3s.35-.87.51-1.31c.43-1.09.87-2.18 1.27-3.29.33-.9.64-1.83.94-2.76s.74-2.14 1.08-3.24c.17-.56.34-1.11.5-1.66s.27-.88.39-1.32c.3-1 .57-2 .84-3s.54-2.06.79-3.1c.2-.83.38-1.67.56-2.5.26-1.19.53-2.38.76-3.57 0-.12.06-.27.08-.39.22-1.12.4-2.26.59-3.38.12-.73.24-1.45.35-2.17.13-.92.27-1.84.39-2.77s.19-1.64.28-2.46c.05-.47.12-1 .17-1.46.11-1 .21-2.1.28-3.16 0-.2 0-.41.05-.59.05-.87.11-1.72.15-2.59.05-.7.05-1.41.08-2.12s0-1.44.08-2.17v-3.08-1.65c0-1.33 0-2.67-.08-4 0-.9-.09-1.77-.14-2.66-.09-1.33-.18-2.65-.29-4-.09-.88-.18-1.78-.27-2.68-.15-1.34-.31-2.68-.51-4-.12-.86-.22-1.7-.36-2.55-.22-1.49-.49-3-.77-4.44-.11-.57-.21-1.14-.32-1.7-.05-.23-.09-.45-.14-.68-.44-2.13-.92-4.26-1.46-6.38-.34-1.34-.72-2.67-1.11-4s-.07-.41-.11-1.09v-1.06-.41a17.3 17.3 0 013.27-10 18.09 18.09 0 019.55-6.4z"
      />
      <path
        className="Banana2_svg__cls-2"
        d="M215.41 345.44c-3.35 7.72-3.4 15.22 1.18 22.4-3.58-2.09-6.75-4.95-8.34-8.86v-.07a9.29 9.29 0 01-.39-1.34 6.3 6.3 0 01-.07-1.37c.13-3.67 3.21-7.31 7.62-10.76z"
      />
    </svg>
  );
}


const Banana4 = ({bananaRef4, style}) => {
 return (
     <svg
      id="Banana4_svg__Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"viewBox="0 0 500 500" 
      ref={bananaRef4} 
      className='particle'
      style={style}
        >
  
      <defs>
        <style>{".Banana4_svg__cls-1{fill:#ffca28}"}</style>
      </defs>
      <path
        className="Banana4_svg__cls-1"
        d="M232.9 275.67s1.53-21.61-26.11-45.34c-39.5-33.93-44-41.42-11.28-36.11s56.6 32.78 56.6 32.78M288.13 297.92s19.59-31.85 37.72-37.66c49.59-15.89 55.56-23.54 22.75-28.48s-63.89 13.91-63.89 13.91"
      />
      <path
        d="M163.94 335.39l-1-13.81-27.25 2a5.12 5.12 0 00-4.73 5.48l.26 3.6a5.12 5.12 0 005.48 4.73z"
        fill="#ac752c"
      />
      <path
        d="M163.94 335.39l-.51-6.91-32.35 2.37.13 1.8a5.12 5.12 0 005.48 4.73z"
        fill="#7d551f"
      />
      <path
        d="M289.86 285.24a139.83 139.83 0 01-113.51 61.44c-5 0-13.37-.58-19.78-3.6a15.89 15.89 0 01-7.49-6.61 12 12 0 01-1.06-2.74 19.83 19.83 0 01-.67-4 16.48 16.48 0 01.92-7c0-.12.09-.22.12-.32a17.32 17.32 0 016.8-8c.12-.07.22-.16.34-.22l.33-.21a6.29 6.29 0 00.59-.32c.61-.32 1-.47 1-.47 1.32-.37 2.65-.75 4-1.16 1-.3 2-.62 2.92-.95s2.21-.76 3.29-1.15c2.17-.78 4.31-1.61 6.41-2.51a128.75 128.75 0 0014.35-7q3.85-2.13 7.49-4.51c1.19-.76 2.36-1.54 3.49-2.34h.07c.71-.49 1.41-1 2.12-1.5l.48-.33c.86-.62 1.71-1.28 2.54-1.91 1.06-.79 2.11-1.61 3.11-2.44.73-.58 1.42-1.19 2.14-1.78l.84-.71c.29-.22.56-.48.84-.73l.49-.43c.69-.59 1.39-1.22 2.07-1.85l.29-.27c.44-.41.88-.81 1.32-1.24s.88-.83 1.32-1.27c.63-.58 1.24-1.19 1.84-1.8L220 276c2.24-2.3 4.37-4.65 6.41-7.08.7-.8 1.38-1.61 2-2.44.31-.38.63-.75.92-1.12l.83-1.07c.08-.11.15-.22.24-.33.66-.84 1.3-1.69 1.9-2.54l.83-1.12c.71-1 1.41-1.95 2.08-2.95.45-.65.87-1.31 1.31-1.95.85-1.31 1.7-2.62 2.48-4 .29-.44.56-.9.83-1.34.08-.13.17-.27.25-.42.46-.82.92-1.62 1.4-2.43s.95-1.73 1.42-2.58c1.48-2.73 2.83-5.5 4.11-8.31.13-.31.27-.6.39-.89.29-.61.56-1.22.8-1.83a.38.38 0 00.06-.13c.38-.9.77-1.79 1.12-2.7.09-.21.19-.41.26-.61l.2-.51c.44-1.16.88-2.29 1.29-3.45.2-.52.39-1 .58-1.56l.13-.39.33-1c.11-.34.22-.66.32-1q1.11-3.33 2-6.7c.33-1.12.62-2.26.9-3.4.43-1.63.8-3.25 1.14-4.92l.12-.51c0-.13.05-.27.07-.4.39-1.9.73-3.84 1.05-5.76.1-.64.2-1.3.29-1.95s.17-1.29.27-2 .19-1.53.27-2.31c.07-.47.12-.93.15-1.41.11-.83.17-1.68.24-2.52s.14-1.53.19-2.29c.1-1.36.18-2.7.22-4 0-.68.05-1.38.05-2.07v-.77a6.74 6.74 0 000-.78v-1.54-1.77q0-2.94-.19-5.88v-.31c-.11-1.78-.24-3.58-.41-5.38v-.07c-.38-7.39-3.21-24.69-1.85-36.89.61-5.58 2.1-10.11 5.12-12.13a6.57 6.57 0 011.19-.66 10.94 10.94 0 011.34-.35.1.1 0 01.07 0c4.17-.71 8.26.49 11.93 2.45 7.38 3.93 12.91 10.94 13.5 11.7a139.72 139.72 0 01-.45 155.66z"
        fill="#ffb300"
      />
      <path
        d="M262.67 275.67a139 139 0 01-71.77 51.7c-1.67.51-3.33 1-5 1.44a139.36 139.36 0 01-37.66 4.87H148a19.83 19.83 0 01-.67-4 16.48 16.48 0 01.92-7c0-.12.09-.22.12-.32a17.32 17.32 0 016.8-8c.12-.07.22-.16.34-.22l.33-.21a6.29 6.29 0 00.59-.32c.61-.32 1-.47 1-.47 1.32-.37 2.65-.75 4-1.16 1-.3 2-.62 2.92-.95s2.21-.76 3.29-1.15c.18-.08.4-.15.61-.23l1.61-.61c1.41-.53 2.8-1.09 4.19-1.67l2.36-1c1.25-.55 2.49-1.12 3.7-1.7l2.42-1.17c1.17-.59 2.35-1.21 3.53-1.83l2.34-1.28c1.16-.66 2.31-1.34 3.45-2l1.42-.85c.87-.54 1.75-1.07 2.62-1.63.59-.41 1.2-.81 1.8-1.22s1.13-.73 1.69-1.12h.07c.71-.49 1.41-1 2.12-1.5l.48-.33c.86-.62 1.71-1.28 2.54-1.91l1.16-.91c.64-.51 1.29-1 1.95-1.53s1.42-1.19 2.14-1.78l.84-.71c.28-.24.56-.5.84-.73l.49-.43c.69-.61 1.39-1.22 2.07-1.85l.29-.27c.44-.41.88-.81 1.32-1.24l1.32-1.27c.61-.59 1.23-1.19 1.84-1.8L220 276l1.15-1.23c.71-.73 1.39-1.47 2.07-2.22.31-.34.61-.7.92-1l.35-.4c.65-.73 1.3-1.46 1.92-2.2.36-.43.71-.87 1.07-1.31s.63-.76 1-1.13.63-.75.92-1.12l.83-1.07c.08-.11.15-.22.24-.33.35-.47.71-.95 1.05-1.42s.56-.75.85-1.12l.83-1.12c.71-1 1.41-1.95 2.08-2.95.45-.65.87-1.31 1.31-1.95.85-1.31 1.7-2.62 2.48-4 .29-.44.56-.9.83-1.34.08-.13.17-.27.25-.42.46-.82.92-1.62 1.4-2.43s.95-1.73 1.42-2.58c.53-1 1-2 1.55-3l1.25-2.54c.44-.9.87-1.84 1.31-2.75.13-.31.27-.6.39-.89.27-.61.54-1.22.8-1.83a.38.38 0 00.06-.13c.38-.9.77-1.79 1.12-2.7.09-.21.19-.41.26-.61l.2-.51c.24-.65.46-1.27.7-1.9s.4-1 .59-1.55.39-1 .58-1.56l.13-.39.33-1c.11-.34.22-.66.32-1q1.1-3.33 2-6.7c.31-1.14.62-2.26.9-3.4.43-1.63.8-3.25 1.14-4.92l.12-.51c0-.13.05-.27.07-.4.39-1.9.73-3.84 1.05-5.76.1-.64.2-1.3.29-1.95s.17-1.29.27-2 .19-1.53.27-2.31l.15-1.41c.09-.83.17-1.68.24-2.52s.14-1.53.19-2.29c.08-1.34.15-2.69.22-4 0-.68.05-1.38.05-2.07v-.77a6.74 6.74 0 000-.78v-2.76-.55q0-2.94-.19-5.88v-.31c-.11-1.78-.24-3.58-.41-5.38v-.07c-.38-7.39-3.21-24.69-1.85-36.89.61-5.58 2.1-10.11 5.12-12.13a6.57 6.57 0 011.19-.66 10.94 10.94 0 011.34-.35c.56.83 1.16 1.68 1.7 2.54.87 1.34 1.73 2.72 2.56 4.09a139.65 139.65 0 01-6.38 153.57z"
        fill="#ffd54f"
      />
      <path
        d="M289.86 285.24l-27.19-9.57-32.49-11.42c.08-.11.15-.22.24-.33.35-.47.71-.95 1.05-1.42s.56-.75.85-1.12l.83-1.12c.71-1 1.41-1.95 2.08-2.95.45-.65.87-1.31 1.31-1.95.85-1.31 1.7-2.62 2.48-4 .29-.44.56-.9.83-1.34.08-.13.17-.27.25-.42.46-.82.92-1.62 1.4-2.43s.95-1.73 1.42-2.58c.53-1 1-2 1.55-3l1.25-2.54c.44-.9.87-1.84 1.31-2.75.13-.31.27-.6.39-.89.27-.61.54-1.22.8-1.83a.38.38 0 00.06-.13c.38-.9.77-1.79 1.12-2.7.09-.21.19-.41.26-.61l.2-.51c.24-.65.46-1.27.7-1.9s.4-1 .59-1.55.39-1 .58-1.56l.13-.39.33-1c.11-.34.22-.66.32-1q1.1-3.33 2-6.7c.31-1.14.62-2.26.9-3.4.43-1.63.8-3.25 1.14-4.92l.12-.51c0-.13.05-.27.07-.4.39-1.9.73-3.84 1.05-5.76.1-.64.2-1.3.29-1.95s.17-1.29.27-2 .19-1.53.27-2.31l.15-1.41c.11-.83.17-1.68.24-2.52s.14-1.53.19-2.29c.08-1.34.15-2.69.22-4 0-.68.05-1.38.05-2.07v-.77a6.74 6.74 0 000-.78v-1.54-1.77q0-2.94-.19-5.88v-.31c-.11-1.78-.24-3.58-.41-5.38v-.07c-.38-7.39-3.21-24.69-1.85-36.89.61-5.58 2.1-10.11 5.12-12.13a6.57 6.57 0 011.19-.66 10.94 10.94 0 011.34-.35.1.1 0 01.07 0c4.17-.71 8.26.49 11.93 2.45 7.38 3.93 12.91 10.94 13.5 11.7a139.72 139.72 0 01-.45 155.66z"
        fill="#ffe082"
      />
      <path
        d="M262.67 275.67a139.65 139.65 0 006.38-153.57c-.83-1.37-1.69-2.75-2.56-4.09-.54-.86-1.14-1.71-1.7-2.54a10.94 10.94 0 00-1.34.35 6.57 6.57 0 00-1.19.66c-3 2-4.51 6.55-5.12 12.13-1.36 12.2 1.47 29.5 1.85 36.89v.07c.17 1.8.3 3.6.41 5.38v.31q.17 2.94.19 5.88v3.31a6.74 6.74 0 010 .78v.77c0 .69 0 1.39-.05 2.07-.07 1.35-.14 2.7-.22 4-.05.76-.1 1.52-.19 2.29s-.15 1.69-.24 2.52l-.15 1.41q-.12 1.17-.27 2.31-.15 1-.27 2c-.09.65-.19 1.31-.29 1.95-.32 1.92-.66 3.86-1.05 5.76 0 .13 0 .27-.07.4l-.12.51c-.34 1.67-.71 3.29-1.14 4.92-.28 1.14-.59 2.26-.9 3.4q-.93 3.38-2 6.7c-.1.36-.21.68-.32 1l-.33 1-.13.39c-.19.53-.38 1-.58 1.56s-.39 1-.59 1.55-.46 1.25-.7 1.9l-.2.51c-.07.2-.17.4-.26.61-.35.91-.74 1.8-1.12 2.7a.38.38 0 01-.06.13c-.26.61-.53 1.22-.8 1.83-.12.29-.26.58-.39.89-.44.91-.87 1.85-1.31 2.75l-1.25 2.54c-.51 1-1 2-1.55 3-.47.85-.95 1.7-1.42 2.58s-.94 1.61-1.4 2.43c-.08.15-.17.29-.25.42-.27.44-.54.9-.83 1.34-.78 1.34-1.63 2.65-2.48 4-.44.64-.86 1.3-1.31 1.95-.67 1-1.37 2-2.08 2.95l-.83 1.12c-.29.37-.56.75-.85 1.12s-.7.95-1.05 1.42c-.09.11-.16.22-.24.33z"
        fill="#ffecb3"
      />
      <path
        className="Banana4_svg__cls-1"
        d="M229.66 264.21s29 8.28 40.63 19.9c18.29 18.29 25.52 26.59 14.89 81.69-.39 2-.71 4-.94 6.06-1 9.16-2 32.38 34-21.35 43.38-64.63-18.15-82.81-18.15-82.81-22.58-6.53-46.6-7.24-70.43-3.49z"
      />
    </svg> 
 )
}