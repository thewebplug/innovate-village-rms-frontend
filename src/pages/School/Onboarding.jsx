import LoginIllustration from "../../img/Learning-cuate.png";
import Logo from "../../img/InnovateVillageArtboard-3.png";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    return (
        <div className="onboarding">
        <div className="onboarding__card">
          <h1>Onboarding</h1>
          <h2>Select features you'd like to use</h2>
          <div className="onboarding__card-grid">
           <button className="onboarding__grid-pill">
            <h3>Student Registration</h3>
           </button>
           <button className="onboarding__grid-pill">
            <h3>Student Management</h3>
           </button>
           <button className="onboarding__grid-pill">
            <h3>Admin/Staff Management</h3>
           </button>
           <button className="onboarding__grid-pill">
            <h3>Result Checking</h3>
           </button>
           
           
          </div>
        </div>
      </div>
    )
}