import LoginIllustration from "../../img/Learning-cuate.png";
import Logo from "../../img/InnovateVillageArtboard-3.png";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card-background">
          <img src={LoginIllustration} alt="" />
        </div>
        <div className="login__card-container">
          <div className="container-login">
            <img src={Logo} alt="" className="logo" />

            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="text"
              placeholder="Scratch Card Number"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="text"
              placeholder="Student ID"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />

            <button className="container-login__filled">Check Result</button>
            <button className="container-login__trans" onClick={() => navigate("/card/2324")}>
              Purchase a scratch card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
