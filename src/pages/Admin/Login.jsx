import LoginIllustration from "../../img/Learning-cuate.png";
import Logo from "../../img/InnovateVillageArtboard-3.png";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/admin/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import jwt_decode from 'jwt-decode';

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();

    const response = await login(email, password);
    console.log('response', response);
    if (response?.status === 200) {
      // const tokenDecoded = jwt_decode(response.data.token);

      // if (
      //   tokenDecoded?.role === "thirdParty" ||
      //   tokenDecoded?.role === "admin"
      // ) {
        // toast.error("Please log in with a user account");
      // } else {
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          payload: {
            token: response.data.token,
          },
        });
        navigate("/");
        window.scrollTo(0, 0);
      // }
    } else {
      if(response?.data?.message) {

        toast.error(response?.data?.message)
      }else {
        toast.error(response?.statusText)
      }
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card-background">
          <img src={LoginIllustration} alt="" />
        </div>
        <div className="login__card-container">
          <form className="container-login" onSubmit={handleLogin}>
            <img src={Logo} alt="" className="logo" />

            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="container-login__filled" type="submit">Login</button>
            {/* <button className="container-login__trans" onClick={() => navigate("/card/2324")}>
              Purchase a scratch card
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
