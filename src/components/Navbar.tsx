function Navbar()
{
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">School Web App</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="courses">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav></>
)}

export default Navbar;