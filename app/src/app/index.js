import React, { Component } from 'react'
import Image from './children/image'
import styles from './styles'

class App extends Component {
  render () {
    const {data} = this.props
    return (
      <main style={styles.main}>
        <div style={styles.image}>
          <Image data={data} />
        </div>
        <div style={styles.text}>
          <p>User car block</p>
          <p>Comments block</p>
        </div>
      </main>
    )
  }
}

export default App
