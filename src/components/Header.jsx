const Header = () => {
    return(
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto  justify-content-center mb-md-0 text-md-end text-sm-start notes">
          <h6>Notes Builder</h6>
        </ul>
       </div>
    </div>
  </header>
  );
}
export default Header;