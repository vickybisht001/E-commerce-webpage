import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">         
            <h1 className='text-white fw-bold'>DIVISIMA</h1>
        </a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Jewelry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Shoes</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/" >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Product page</a>
                <a className="dropdown-item" href="/">Category page</a>
                <a className="dropdown-item" href="/">Cart page</a>
                <a className="dropdown-item" href="/">Checkout page</a>
                <a className="dropdown-item" href="/">Contact page</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/" >
                Blog
              </a>

            </li>

          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search on divisima" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
     </>

  )
}

export default Navbar


