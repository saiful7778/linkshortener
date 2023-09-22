const Home = () => {
  return (
    <div className='main-bg'>
      <div className="container w-3/4 mx-auto p-3">
        <div className="container-box p-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <input className="input w-full" type="url" placeholder="Enter url...." />
            </div>
            <button className="btn" type="button">add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home