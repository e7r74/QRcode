import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { GENERATE_DATA } from '../../constant'
import s from './qrCodeGenerator.module.css'
export const QrCodeGenerator = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]))
    setResult(value)
    setValue('')
  }
  const onChangeHadle = (event) => {
    setValue(event.target.value)
    setResult('')
  }
  return (
    <div>
      <div className={s.container}>
        {result !== '' ? <QRCodeSVG value={result} size={300} /> : null}

        <input
          type="text"
          value={value}
          onChange={onChangeHadle}
          className={s.imput}
        />
        <button onClick={onClickHandler} type="button" className={s.button}>
          Сгенерировать QR
        </button>
      </div>
    </div>
  )
}
