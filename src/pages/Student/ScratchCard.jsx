import Logo from "../../img/InnovateVillageArtboard-3.png";
import MainLogo from "../../img/InnovateVillageArtboard-2.png";
import PayStack from "../../img/Paystack_Logo.png";
import Flutterwave from "../../img/Flutterwave_Logo.png";
import { Link } from "react-router-dom";

const ScratchCard = () => {
  return (
    <div className="scratchCardContainer">
      <div className="scratchCardContainer__card">
        <div className="card__card1">
          <img src={MainLogo} alt="" className="card1__logo" />
          <div>
            <div className="card1__title">Hello, Saleem</div>
            <div className="card1__group">
              <div className="card1__group-illustration">
                <div className="illustration__container">
                  <img
                    src={Logo}
                    alt=""
                    className="illustration__container-logo"
                  />
                </div>
                <div className="illustration__line"></div>
                <div className="illustration__number">
                  <span>4544</span>
                  <span>8912</span>
                  <span>3432</span>7843
                </div>
                <div className="illustration__title">Innovate Village</div>
              </div>
              <div className="card1__group-illustration">
                <div className="illustration__container">
                  <img
                    src={Logo}
                    alt=""
                    className="illustration__container-logo"
                  />
                </div>
                <div className="illustration__line"></div>
                <div className="illustration__number">
                  <span>4544</span>
                  <span>8912</span>
                  <span>3432</span>7843
                </div>
                <div className="illustration__title">Innovate Village</div>
              </div>
              <div className="card1__group-illustration">
                <div className="illustration__container">
                  <img
                    src={Logo}
                    alt=""
                    className="illustration__container-logo"
                  />
                </div>
                <div className="illustration__line"></div>
                <div className="illustration__number">
                  <span>4544</span>
                  <span>8912</span>
                  <span>3432</span>7843
                </div>
                <div className="illustration__title">Innovate Village</div>
              </div>
            </div>
          </div>
          <div className="card1__price">₦2,000</div>
        </div>
        <div className="card__card2">
          <Link to="/login">
            <div className="card__card2-back">
              <svg
                viewBox="0 0 1024 1024"
                fill="#ffffff"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                    fill=""
                  ></path>
                </g>
              </svg>
              Back
            </div>
          </Link>
          <div className="card__card2-title">Proceed to payment</div>
          <button className="card__card2-paystack">
            Pay with <img src={PayStack} alt="" />
          </button>
          <button className="card__card2-flutterwave">
            Pay with <img src={Flutterwave} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScratchCard;
