import React, { Component } from 'react'
import api from '../api'
import Image from './blocks.jsx'

class Gallery extends Component {
  state = {
    images: []
  }

  constructor(props) {
    super(props)

    api.getAllBlocks().then(res => {
      this.setState({ images: res.data.blocks })
    })
  }

  render() {
    return (
      <div className="blocks-list">
        {this.state.images.map(image => <Image key={image._id} id={image._id} />)}

      </div>
    )
  }
}


export default Gallery