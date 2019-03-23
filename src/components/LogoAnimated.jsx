import React, { Component } from 'react'
import lottie from 'lottie-web'
import animationData from './../assets/animations/logo-intro'

class AnimationChecker extends Component {
  constructor(props) {
    super(props)
    this.animationRef = React.createRef()
  }

  state = {
    anim: null
  }

  componentDidMount() {
    lottie.loadAnimation({
      container: this.animationRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData
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
