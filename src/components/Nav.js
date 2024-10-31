import whiteLogo from "../images/mingo-logo-white.png";
import colorLogo from "../images/mingo-logo-color.png";

const Nav = ({minimal, showModal, setShowModal, setIsSignUp}) => {

  const handleClick= () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  const authToken = true

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" alt="" src={minimal ? colorLogo : whiteLogo} />
      </div>

      {!authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal} >Log in</button>}
    </nav>
  );
};

export default Nav;
