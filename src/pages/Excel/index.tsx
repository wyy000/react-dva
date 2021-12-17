import React, { useState } from 'react'
import { connect } from 'dva'

import { ExcelToLuckySheet } from '../../components/ExcelToLuckySheet'
import { LuckySheet } from '../../components/LuckySheet'
import { luckyCss } from '../../config/luckysheet'

// @ts-ignore
const Excel = ({ excel, dispatch }) => {

  const [isVisible, setIsVisible] = useState(false)
  const {fileCache, streamCache} = excel

  const readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || !files[0]) return

    fileCache['one'] || dispatch({type: 'excel/saveFile', payload: {one: files[0]}})
    setIsVisible(true)
  }

  const getFile = async () => {
    await dispatch({ type: 'excel/fetchExcel' })
    const file = new Blob([streamCache.one],  {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    dispatch({type: 'excel/saveFile', payload: {one: file}})
    setIsVisible(true)
  }

  return (
    <>
      <input type='file' onChange={e => readFile(e)}/>
      <button onClick={() => getFile()}>getFile</button>
      {/*通过路由跳转，用缓存做判断，是否有文件流，是否已转为data, 引入判断组件，返回渲染组件*/}
      {isVisible
        ? <ExcelToLuckySheet data={fileCache['one']}>
            <LuckySheet style={luckyCss}/>
          </ExcelToLuckySheet>
        : null
      }
    </>
  )
}

// @ts-ignore
export default connect(({ excel }) => ({ excel }))(Excel)
