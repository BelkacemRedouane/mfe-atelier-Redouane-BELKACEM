const Navbar = () => {
  const element = document.createElement('header');
  element.innerHTML = `
    <nav style="background-color: #222; color: white; padding: 15px; text-align: center;">
      <h1>Navigation - Micro Frontend</h1>
    </nav>
  `;
  return element;
};

export default Navbar;