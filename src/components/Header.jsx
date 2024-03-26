import logo from "../assets/images/logo-teal.svg";
function Header() {
  //console.log(data);
  return (
    <>
      <header className="white-bg">
        <div className="container">
          <img src={logo} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
