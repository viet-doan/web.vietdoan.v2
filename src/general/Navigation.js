function Navigation() {
  return (
    <nav className="navbar">
      <div className="navMain nav-left" >Viet Doan</div>
      <div className="navLinks">
        <a className="nav-item" href="/">Home</a>
        <a className="nav-item" href="/create">About</a>
        <a className="nav-item" href="/">Experiences</a>
      </div>
      <button className="nav-btn nav-right">Contact</button>
    </nav>
  );
}

export default Navigation;
