import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
const NavBar = ({
  minimal,
  authToken,
  showModel,
  setShowModel,
  setIsSignUp,
}) => {
  const handleClick = () => {
    setShowModel(true);
    setIsSignUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? whiteLogo : colorLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          onClick={handleClick}
          disabled={showModel}
          className="nav-button"
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default NavBar;
