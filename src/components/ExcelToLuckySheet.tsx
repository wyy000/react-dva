import React, { useState } from 'react'

// @ts-ignore
import LuckyExcel from 'luckyexcel'
import { ReadOnlyOptions } from "../config/luckysheet"

export const ExcelToLuckySheet: React.FC = ({ data, children }) => {

  const [state, setState] = useState({})

  LuckyExcel.transformExcelToLucky(data, function(
    exportJson: { sheets: string | any[] | null; info: { name: any } },
    luckysheetfile: any
  ){
    if(exportJson.sheets === null || exportJson.sheets.length === 0) {
      return alert("Failed to read the content of the excel file, currently does not support xls files!")
    }

    const options = {
      container: 'luckysheet',
      data: exportJson.sheets,
      title: exportJson.info.name,
      // userInfo: exportJson.info.name.creator,
    }
    const myOptions = Object.assign(ReadOnlyOptions, options)
    if (exportJson.sheets.length === 1) myOptions.showsheetbarConfig.menu = false

    setState(myOptions)
  })

  return (
    <>
      {
        Object.keys(state).length === 0
          ? null
          : React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return null
            }
            // 这里我们通常还会判断 child 的类型来确定是不是要传递相应的数据，这里我就不做了
            const childProps = {
              options: state,
              ...child.props,
              // checked: selected.findIndex(
              //   value => value.toString() === child.props.children,
              // ) > -1,
            }
            return React.cloneElement(child, childProps)
          })
      }
    </>
  )
}
