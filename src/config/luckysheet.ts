import React from 'react'

export const ReadOnlyOptions = {
  lang: 'zh',
  column: 60,
  row: 84,
  allowCopy: false,
  allowEdit: false,
  showtoolbar: false,
  showinfobar: true,
  showsheetbarConfig: {
    add: false,
    menu: true,
    sheet: false,
  },
  showstatisticBar: false,
  enableAddRow: false,
  enableAddCol: false,
  enableAddBackTop: false,
  userInfo: false,
  myFolderUrl: 'http://localhost:8000/#/exeal',
  rowHeaderWidth: 46,
  columnHeaderHeight: 0,
  sheetFormulaBar: false,
  forceCalculation: true,
}

export const luckyCss: React.CSSProperties = {
  margin: '0px',
  padding: '0px',
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: '0px',
  top: '0px',
}
