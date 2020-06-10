import React from 'react'
import styles from './[id].less'
import { useParams } from 'umi'

export default props => {
  const {
    match: {
      params: { id },
    },
  } = props

  return (
    <div>
      <h1 className={styles.title}>Page product/[{id}]</h1>
      <Child />
    </div>
  )
}

function Child(props) {
  const { id } = useParams()

  return (
    <div>
      <h1>Child</h1>
      <p>{id}</p>
    </div>
  )
}
