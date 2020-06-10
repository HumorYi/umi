import React from 'react'
import styles from './_layout.less'

export default ({ children }) => {
  return (
    <div>
      <h1 className={styles.title}>Page product/_layout</h1>
      {children}
    </div>
  )
}
