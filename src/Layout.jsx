import { Route, Routes } from 'react-router-dom'
import { QrCodeGenerator } from './components/Generator/QrCodeGenerator'
import { QrCodeScanner } from './components/Scan/QrCodeScanner'
import { Navigation } from './components/Navigation/Navigation'
import { ScanHistory } from './components/ScanHitory/ScanHistory'
import { GenrateHistory } from './components/GenerateHistory/GenerateHistory'
const Layout = () => {
  return (
    <div>
      {/* <QrCodeGenerator /> */}
      {/* <QrCodeScanner /> */}
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
        <Route path="/generateHistory" element={<GenrateHistory />} />
      </Routes>
    </div>
  )
}
export { Layout }
