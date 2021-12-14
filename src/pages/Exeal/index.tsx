import React from 'react'
import XLSX from 'xlsx'

const Exeal: React.FC = () => {
  const ExealToArray = (e: InputEvent, callback: () => {}) => {
    const files = e.target.files
    const reader = new FileReader()

    reader.onload = function(e) {
      const data = e.target.result
      const workbook = XLSX.read(data, {type: 'binary'})
      if (callback) callback(workbook)

      console.log(workbook)
    }
    reader.readAsBinaryString(files[0])
  }

  return (
    <>
      <input type='file' onChange={e => ExealToArray(e)} />
      <h1>exeal</h1>
    </>
  )
}

export default Exeal
