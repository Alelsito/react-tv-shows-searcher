import React from 'react'

const NotFound = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div>
            <div className='container container-ghost d-flex flex-column justify-content-center'>
              <h1 className='text-error'>404</h1>
              <h3 className='text-error-info'>NOT FOUND</h3>
            </div>
            <div className='container container-ghost'>
              <div className='ghost-copy'>
                <div className='one' />
                <div className='two' />
                <div className='three' />
                <div className='four' />
              </div>
              <div className='ghost'>
                <div className='face'>
                  <div className='eye' />
                  <div className='eye-right' />
                  <div className='mouth' />
                </div>
              </div>
              <div className='shadow' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
