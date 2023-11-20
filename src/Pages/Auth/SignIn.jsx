import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import { useUser } from "../../Provider/UserProvider";

export default function SignIn() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { signInContext } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignIn(userInfo);
  };

  const SignIn = async () => {
    try {
      // POST REQUEST FOR SIGNUP
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectId: "ulwb3huij7ys",
          },
          body: JSON.stringify({
            ...userInfo,
            appType: "ecommerce",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const {
          token,
          data: { name },
        } = data;
        console.log({ name });
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", JSON.stringify(name));
        // Pass the user data to the context
        signInContext(token);
        navigate("/");
      } else {
        console.error("SignIn failed");
      }
    } catch (error) {
      console.log("Error creating SignUp", error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Login with the souled store</h2>
        <div className="signin-btns">
          <button
            onClick={() => navigate("/sign-in")}
            className="active-login-btn"
            disabled
          >
            LOGIN
          </button>
          <button onClick={() => navigate("/sign-up")} className="login-btn">
            REGISTER
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signin-input">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <button type="submit" className="proceed-btn">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
