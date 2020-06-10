import React from 'react'
import styles from './index.less'

export default props => {
  return (
    <div>
      <h1 className={styles.title}>Page global layouts</h1>
      {props.children}
    </div>
  )
}
