import React, {useState} from 'react'
import { connect } from 'dva'
import {LuckySheet} from '../../components/LuckySheet'
import {luckyCss} from '../../config/luckysheet'
import {ExcelToLuckySheet} from '../../components/ExcelToLuckySheet'

// @ts-ignore
const Exeal = ({ excel, dispatch }) => {
  // const [file, setFile] = useState({})

  const [isVisible, setIsVisible] = useState(false)
  const {streamCache} = excel

  const readFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || !files[0]) return

    streamCache['one'] || dispatch({type: 'excel/saveStream', payload: {one: files[0]}})
  }

  return (
    <>
      <input type='file' onChange={e => readFile(e)}/>
      <button onClick={() => setIsVisible(true)}>show</button>
      <button onClick={() => setIsVisible(false)}>hide</button>
      {/*通过路由跳转，用缓存做判断，是否有文件流，是否已转为data, 引入判断组件，返回渲染组件*/}
      {isVisible
        ? <ExcelToLuckySheet data={streamCache['one']}>
            <LuckySheet style={luckyCss}/>
          </ExcelToLuckySheet>
        : null
      }
      {/*<div id='luckysheet'></div>*/}
    </>
  )
}

// @ts-ignore
export default connect(({ excel }) => ({ excel }))(Exeal)
