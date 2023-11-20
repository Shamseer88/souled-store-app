import { SlUser } from "react-icons/sl";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";
import { useEffect, useState } from "react";

export default function Profile() {
  const { signInContext, isUserLoggedIn } = useUser();
  const [showModal, setShowModal] = useState(false);
  let loginUsername = sessionStorage.getItem("userInfo");
  const navigate = useNavigate();

  const handleSignOut = () => {
    sessionStorage.removeItem("authToken");
    signInContext();
    navigate("/sign-in");
  };

  useEffect(() => {
    signInContext(loginUsername);
  }, []);

  return (
    <div className="profile" onClick={() => setShowModal(!showModal)}>
      <SlUser size={20} className="navbar-icons" />
      <h6 className="profile-name">
        {isUserLoggedIn ? `Welcome, ${loginUsername.replace(/"/g, "")}` : ""}
      </h6>
      {showModal && (
        <section className="auth-modal">
          {isUserLoggedIn ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={() => navigate("/sign-in")}>Sign In</button>
          )}
        </section>
      )}
    </div>
  );
}
