import { useState } from 'react'

const Searcher = ({ onCreate }) => {
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onCreate(value)
  }

  return (
    <div className='container d-flex flex-column'>
      <div className='row mb-3'>
        <div className='col'>
          <h1 className='text-center searcher-title'> ¿Qué serie deseas buscar? </h1>
        </div>
      </div>
      <form className='row' onSubmit={onSubmit}>
        <div className='col d-flex justify-content-center'>
          <input placeholder='Buscar' className='input-search' type='text' value={value} onChange={(e) => setValue(e.target.value)} />
          <button className='button-search' type='submit' value='buscar'>
            <i className='fa fa-search fa-lg' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searcher
