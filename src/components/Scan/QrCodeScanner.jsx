import { Scanner } from '@yudiel/react-qr-scanner'
import s from './qrCodeScanner.module.css'
import { useState } from 'react'
import { SCAN_DATA } from '../../constant'
export const QrCodeScanner = () => {
  const [url, setUrl] = useState('')
  const scanHandler = (result) => {
    setUrl(result[0].rawValue)
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    )
  }
  const settings = {
    finder: false,
  }

  return (
    <div className={s.container}>
      <div className={s.videoWrapper}>
        <Scanner
          onScan={scanHandler}
          components={settings}
          styles={{
            container: { width: 500 },
          }}
        />
      </div>

      <a href={url} target="_blank" className={s.text}>
        {url}
      </a>
    </div>
  )
}
