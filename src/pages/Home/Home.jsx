const Home = () => {
  return (
    <div className='main-bg'>
      <div className="container w-3/4 mx-auto p-3">
        <div className="container-box px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <input className="input w-full" type="url" placeholder="Enter url...." />
            </div>
            <button className="btn" type="button">add</button>
          </div>
        </div>
        <div className="container-box mt-4 px-4 py-3">
          <h1 className="text-3xl font-semibold">All links here:</h1>
        </div>
      </div>
    </div>
  )
}

export default Home