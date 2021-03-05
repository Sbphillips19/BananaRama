import React, { useEffect, useState } from "react";
import Particles from './RainingBananas/Particles';
import "./App.css";

const App = () => {
  let id = 1;

  const [particles, setParticles] = useState([]);

  const clean = (id) => {
    setParticles(particles.filter((_id) => _id !== id));
  };

  useEffect(() => {
    const id = App.id;
    App.id++;

    setParticles([particles, id]);
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
