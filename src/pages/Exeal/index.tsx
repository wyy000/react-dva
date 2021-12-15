import React from 'react'
import * as LuckyExcel from 'luckyexcel'
import { LuckySheet } from '../../components/LuckySheet'
import { luckyCss } from "../../config/luckysheet"
import { ExcelToLuckySheet } from "../../components/ExcelToLuckySheet";

const Exeal: React.FC = () => {

  return (
    <>
      <ExcelToLuckySheet>
        <LuckySheet />
      </ExcelToLuckySheet>
      <div id='luckysheet' style={luckyCss}></div>
    </>
  )
}

export default Exeal
