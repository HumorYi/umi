import React, { useEffect } from 'react'
import styles from './index.less'
import { Link, connect } from 'umi'
import { Button, Table } from 'antd'
import ProTable, { ProColumns } from '@ant-design/pro-table'

const columns:ProColumns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city',
  },
]

function MorePage(props) {
  const goIndex = () => props.history.push('/')

  // useEffect(() => {
  //   props.getMoreData()
  //   // TODO: 获取数据
  //   return () => {}
  // }, [])

  return (
    <div>
      <h1 className={styles.title}>Page more/index</h1>
      {/* <Link to="product/123">go product</Link>
      <Button onClick={goIndex}>go index</Button>*/}
      {/* <Table columns={columns} dataSource={props.more.data} rowKey="id" /> */}
      <ProTable
        columns={columns}
        request={(params) => props.getMoreData(params).then(data => data)}
        rowKey="id"
      />
    </div>
  )
}

MorePage.title = '更多'
// MorePage.redirect = 'product/1234'

export default connect(({ more }) => ({ more }), {
  getMoreData: () => ({ type: 'more/getProductData' }),
})(MorePage)
