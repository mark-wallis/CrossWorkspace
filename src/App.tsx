import { Header } from './components/layout/Header.tsx'
import { NavRail } from './components/layout/NavRail.tsx'
import { Subnav } from './components/layout/Subnav.tsx'
import { MainPanel } from './components/layout/MainPanel.tsx'
import { CopilotPanel } from './components/layout/CopilotPanel.tsx'

export function App() {
  return (
    <>
      <Header />
      <div className="app-body">
        <NavRail />
        <Subnav />
        <div className="content-area">
          <MainPanel />
          <CopilotPanel />
        </div>
      </div>
    </>
  )
}
