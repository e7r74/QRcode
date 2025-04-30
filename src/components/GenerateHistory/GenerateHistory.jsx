import { SCAN_DATA } from '../../constant'
import { QRCodeSVG } from 'qrcode.react'
import { GENERATE_DATA } from '../../constant'
import s from './GenerateHistory.module.css'
export const GenrateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

  return (
    <div className={s.container}>
      {data.map((text) => (
        <p key={text} className={s.result}>
          {text}
          <QRCodeSVG value={text} size={50} />
        </p>
      ))}
    </div>
  )
}
