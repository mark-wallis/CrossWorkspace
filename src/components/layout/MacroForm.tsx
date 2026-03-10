export function MacroForm() {
  return (
    <>
      {/* Page header: breadcrumbs + title */}
      <div className="page-header">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <span className="breadcrumb-item">Workspaces</span>
          <BreadcrumbChevron />
          <span className="breadcrumb-item">Agent tools</span>
          <BreadcrumbChevron />
          <span className="breadcrumb-item">Macros</span>
        </nav>
        <h1 className="page-title">Premium Customer (Priority Handling)</h1>
      </div>

      {/* Form content */}
      <div className="page-content">
        <form className="macro-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-section">
            <div className="form-field">
              <label className="form-label">Macro name*</label>
              <input type="text" className="form-input" defaultValue="Premium Customer — Priority Handling" />
            </div>
            <div className="form-field">
              <label className="form-label">Available for</label>
              <div className="form-select-wrapper">
                <select className="form-select" defaultValue="All agents">
                  <option>All agents</option>
                </select>
                <svg className="form-select-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable={false} viewBox="0 0 16 16">
                  <path fill="currentColor" d="M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="form-separator"></div>

          <div className="form-section">
            <div className="actions-header">
              <h2 className="actions-title">Actions</h2>
              <p className="actions-hint">Add actions to add a comment to the ticket.</p>
            </div>
            <div className="form-field">
              <label className="form-label">Comment/description</label>
              <textarea className="form-textarea" rows={8} defaultValue={`Thank you for contacting us.\n\nAs a valued premium customer, your request has been prioritized and assigned to our specialist team.\n\nWe're reviewing your case now and will provide a detailed response.\n\nBest regards`} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

function BreadcrumbChevron() {
  return (
    <svg className="breadcrumb-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable={false} viewBox="0 0 12 12">
      <path fill="currentColor" d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1" fillOpacity="0" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
