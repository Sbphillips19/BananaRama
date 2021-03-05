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

    this.setState({
      particles: [...this.state.particles, id],
    });
    setTimeout(() => {
      this.clean(id);
    }, 5000);
  }, []);

  const { innerWidth } = window;

  return (
    <div className="app">
      {particles.map((id) => (
        <Particles key={id} count={Math.floor(innerWidth / 20)} />
      ))}
      <div className="button" onClick={this.handleOnClick}>
        🍌 Banana Time
      </div>
    </div>
  );
};

export default App;
