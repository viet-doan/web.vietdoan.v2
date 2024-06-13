function Navigation() {
  return (
    <nav className="navbar">
      <div className="navMain nav-left">Viet Doan</div>
      <div className="navLinks">
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/About">About</a>
        <a className="nav-item" href="/Projects">Projects</a>
        {/* <a className="nav-item" href="/Experiences">Experiences</a> */}
      </div>
      <a className="nav-btn nav-right" href="/Contact">Contact</a>
    </nav>
  );
}

export default Navigation;
