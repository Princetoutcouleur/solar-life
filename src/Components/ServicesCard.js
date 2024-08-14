import React from 'react'

const ServicesCard = (props) => {
  return (
    <div id='service-card' className='col-lg-3 col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center mb-3'>
      <div className="card h-100 p-2">
        <img src={props.icon} alt="icon" className='img-fluid mb-3' />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ServicesCard
