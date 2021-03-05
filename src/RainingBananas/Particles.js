import React from 'react'
import ParticleType1 from './ParticleType1'
import ParticleType2 from './ParticleType2'

const generateWholeNumber = (min, max) => min + Math.floor(Math.random() * (max - min))

export default class Particles extends React.PureComponent {
  render() {
    let { count: n } = this.props;
    const particles = [];
    const types = [ParticleType2, ParticleType1, ParticleType1];

    while (n--) {
      const Particle = types[generateWholeNumber(0, 3)];
      particles.push(<Particle key={n} />);
    }

    return <div className="particles">{particles}</div>;
  }
}
