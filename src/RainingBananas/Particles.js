import React from 'react'
import ParticleType1 from './ParticleType1'

const generateWholeNumber = (min, max) => min + Math.floor(Math.random() * (max - min))

class Particles extends React.PureComponent {
  render() {
    let { count: n } = this.props
    const particles = [];
    const types = [ParticleType1]

    while (n && n--) {
      const Particle = types[generateWholeNumber(0, 3)]
      particles.push(<Particle key={n} />)
    }

    return (
      <div
        className="particles"
        style={{
          position: 'fixed',
          top: 0,
        }}
      >
        {particles}
      </div>
    )
  }
}

export default Particles