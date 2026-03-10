import { MacroForm } from './MacroForm.tsx'

export function MainPanel() {
  return (
    <main className="main-panel">
      <div className="main-scroll">
        <MacroForm />
      </div>
      <footer className="action-footer">
        <button className="btn-cancel">Cancel</button>
        <button className="btn-save">Save</button>
      </footer>
    </main>
  )
}
