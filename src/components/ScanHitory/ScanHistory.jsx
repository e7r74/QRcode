import { SCAN_DATA } from '../../constant'
import { QRCodeSVG } from 'qrcode.react'
import s from './ScanHistory.module.css'
export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
  return (
    <div className={s.container}>
      {' '}
      {data.map((text) => (
        <p key={text} className={s.result}>
          <a href={text}>{text} </a>
          <QRCodeSVG value={text} size={50} />
        </p>
      ))}
    </div>
  )
}
