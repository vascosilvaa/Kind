import React, { Component } from 'react'
import lottie from 'lottie-web'
import animationData from './../assets/animations/sleepy'

class AnimationChecker extends Component {
  constructor(props) {
    super(props)
    this.animationRef = React.createRef()
  }

  state = {
    anim: null,
  }

  componentDidMount() {
    lottie.loadAnimation({
      container: this.animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
  }

  render() {
    return (
      <div>
        <div ref={this.animationRef} />
      </div>
    )
  }
}

export default AnimationChecker