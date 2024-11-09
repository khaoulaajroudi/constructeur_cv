import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import './Styletemplate.css'

const TemplateBasic = () => {
  return (
    <div>
          <div className="templateWrapper">
      <div className="container">
        <div
          className="mx-auto mt-5 templatePaper"
          style={{ width: '210mm' }}
        >
          <div className="row g-0 h-100">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TemplateBasic
