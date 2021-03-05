import React, { useEffect, useState } from "react";
import Particles from './RainingBananas/Particles';
import "./App.css";

export interface AppInterface {
  particles: number[];
}

const App = () => {
  let id = 1;

  const [particles, setParticles] = useState<number[]>([]);

  const clean = (id: number) => {
    setParticles(particles.filter((_id) => _id !== id));
  };

  useEffect(() => {
    id++

    setParticles([...particles, id]);
    setTimeout(() => {
      clean(id);
    }, 5000);
  }, []);

  const { innerWidth } = window;

  return (
    <div className="app">
      {particles.map((id) => (
        <Particles key={id} count={Math.floor(innerWidth / 20)} />
      ))}
    </div>
  );
};

export default App;
