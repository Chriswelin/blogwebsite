import 'bootstrap/dist/css/bootstrap.css';

function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <div class="navbar-header">
          <p class="navbar-brand text-muted">DAILY JOURNAL</p>
        </div>
          <ul class="nav navbar-nav mb-2 mb-lg-0 navbar-right">
            <li class="nav-item text-muted" id="home"><a class="nav-link" href="/">HOME</a></li>
            <li class="nav-item text-muted" id="about"><a class="nav-link" href="/about">ABOUT US</a></li>
            <li class="nav-item" id="contact"><a class="nav-link" href="/contact">CONTACT US</a></li>
          </ul>
      </div>
    </nav>
    )
}

export default Navbar;