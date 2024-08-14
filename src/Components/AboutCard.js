import React from 'react'

const AboutCard = ({number, title, description }) => {
  return (
    <div className="col-lg-4 col-md-3 col-sm-6 p-2">
      <div className="about-card card h-100">
        <div className="card-body">
          <h1 className="card-title fw-bold red-color">{number}</h1>
          <h5 className="card-text fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
