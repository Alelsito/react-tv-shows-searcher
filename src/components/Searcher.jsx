const Searcher = () => {
  return (
    <div className='container d-flex flex-column'>
      <div className='row mb-2'>
        <div className='col'>
          <h1 className='text-center'> ¿Qué serie desea buscar? </h1>
        </div>
      </div>
      <form className='row'>
        <div className='col d-flex justify-content-center'>
          <input placeholder='Buscar' className='input-search' type='text' />
          <button className='button-search' type='submit'>
            <i className='fa fa-search' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searcher
