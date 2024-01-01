import React from "react";
import Logo from "../img/InnovateVillageArtboard-2.png";

import ApprovalIcon from "@mui/icons-material/Approval";

import VerifiedIcon from "@mui/icons-material/Verified";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const pathname = useLocation();

  //   const handleLogout = () => {
  //     localStorage.removeItem("tink_token");
  //     dispatch({
  //       type: "LOGOUT_SUCCESS",
  //     });
  //     localStorage.removeItem("tink_token");
  //     history.push("/");
  //   };

  return (
    <div className="admin_nav-container">
      <div className="admin_nav-logo_container">
        {/* <img className="admin_nav-logo" src={Logo} alt="logo" /> */}
      </div>

      <div className="admin_nav-container-inner">
        <Link to="/" className="link">
          <div
            className={
              pathname?.pathname === "/"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                className={
                  pathname?.pathname === "/"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="26"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 255.931 255.931"
                xmlSpace="preserve"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M23.867,89.455h65.588V23.867H23.867V89.455z M35.801,35.801h41.72v41.72h-41.72V35.801z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M0,113.323h113.323V0H0V113.323z M11.934,11.934h89.455v89.455H11.934V11.934z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M142.608,0v113.323h113.323V0H142.608z M243.997,101.389h-89.455V11.934h89.455V101.389z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M232.064,23.867h-65.588v65.588h65.588V23.867z M220.13,77.522h-41.72v-41.72h41.72V77.522z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M23.867,232.064h65.588V166.47H23.867V232.064z M35.801,178.403h41.72v41.726h-41.72V178.403z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M0,255.931h113.323V142.602H0V255.931z M11.934,154.536h89.455v89.461H11.934V154.536z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M166.476,232.064h65.588V166.47h-65.588V232.064z M178.409,178.403h41.72v41.726h-41.72V178.403z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M142.608,255.931h113.323V142.602H142.608V255.931z M154.542,154.536h89.455v89.461h-89.455 V154.536z"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>

              <div>Home</div>
            </div>
          </div>
        </Link>
        <Link to="/students" className="link">
          <div
            className={
              pathname?.pathname.includes("student")
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname.includes("student")
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#ffffff"
                stroke="#ffffff"
                className={
                  pathname?.pathname.includes("student")
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="26"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      class="st0"
                      fill="#ffffff"
                      d="M116.738,231.551c0,23.245,14.15,43.315,34.513,49.107c15.262,42.368,55.574,70.776,100.582,70.776 s85.32-28.408,100.58-70.776c20.365-5.792,34.515-25.854,34.515-49.107c0-15.691-6.734-30.652-18.061-40.248l1.661-8.921 c0-3.323-0.229-6.568-0.491-9.821l-0.212-2.593l-2.213,1.374c-30.871,19.146-80.885,27.71-116.754,27.71 c-34.85,0-83.895-8.214-114.902-26.568l-2.259-0.59l-0.188,2.554c-0.192,2.632-0.384,5.256-0.357,8.23l1.632,8.649 C123.466,200.923,116.738,215.876,116.738,231.551z"
                    ></path>{" "}
                    <path
                      class="st0"
                      fill="#ffffff"
                      d="M356.151,381.077c-9.635-5.97-18.734-11.607-26.102-17.43l-0.937-0.738l-0.972,0.691 c-6.887,4.914-31.204,30.17-51.023,51.172l-10.945-21.273l5.697-4.076v-20.854h-40.07v20.854l5.697,4.076l-10.949,21.281 c-19.825-21.009-44.154-46.265-51.034-51.18l-0.973-0.691l-0.937,0.738c-7.368,5.823-16.469,11.46-26.102,17.43 c-30.029,18.61-64.062,39.697-64.062,77.344c0,22.244,52.241,53.579,168.388,53.579c116.146,0,168.388-31.335,168.388-53.579 C420.213,420.774,386.178,399.687,356.151,381.077z"
                    ></path>{" "}
                    <path
                      class="st0"
                      fill="#ffffff"
                      d="M131.67,131.824c0,18.649,56.118,42.306,119.188,42.306s119.188-23.656,119.188-42.306v-25.706l43.503-17.702 v55.962c-5.068,0.792-8.964,5.186-8.964,10.45c0,4.503,2.966,8.432,7.242,9.852l-8.653,57.111h40.704l-8.651-57.111 c4.27-1.421,7.232-5.35,7.232-9.852c0-5.295-3.919-9.697-9.014-10.466l-0.21-67.197c0.357-0.621,0.357-1.266,0.357-1.607 c0-0.342,0-0.978-0.149-0.978h-0.002c-0.262-2.446-2.011-4.612-4.56-5.652l-11.526-4.72L267.551,3.238 C262.361,1.118,256.59,0,250.858,0s-11.502,1.118-16.69,3.238L72.834,68.936c-2.863,1.172-4.713,3.773-4.713,6.622 c0,2.842,1.848,5.443,4.716,6.63l58.833,23.928V131.824z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>

              <div>Students</div>
            </div>
          </div>
        </Link>

        <Link to="/result" className="link">
          <div
            className={
              pathname?.pathname === "/result"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/result"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                className={
                  pathname?.pathname === "/result"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="31"
                fill="#ffffff"
                viewBox="0 0 32 32"
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <defs> </defs>{" "}
                  <rect x="13.9999" y="23" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="23" width="2" height="2"></rect>{" "}
                  <rect x="13.9999" y="18" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="18" width="2" height="2"></rect>{" "}
                  <rect x="13.9999" y="13" width="8" height="2"></rect>{" "}
                  <rect x="9.9999" y="13" width="2" height="2"></rect>{" "}
                  <path
                    d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"
                    transform="translate(0 0)"
                  ></path>{" "}
                  <rect
                    id="_Transparent_Rectangle_"
                    data-name="<Transparent Rectangle>"
                    class="cls-1"
                    fill="none"
                    width="32"
                    height="32"
                  ></rect>{" "}
                </g>
              </svg>
              <div>Result</div>
            </div>
          </div>
        </Link>
        <Link to="/cards" className="link">
          <div
            className={
              pathname?.pathname === "/cards"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/cards"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                className={
                  pathname?.pathname === "/cards"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
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
                  {" "}
                  <path
                    d="M2 12.6101H19"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M5.25 17.8101H6.96997"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.10986 17.8101H12.5499"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div>Scratch Cards</div>
            </div>
          </div>
        </Link>
        <Link to="/cards" className="link">
          <div
            className={
              pathname?.pathname === "/cards"
                ? "admin_nav-flex-container admin_nav-active"
                : "admin_nav-flex-container"
            }
          >
            <div
              className={
                pathname?.pathname === "/cards"
                  ? "admin_nav-flex admin_nav-flex-active"
                  : "admin_nav-flex"
              }
            >
              <svg
                className={
                  pathname?.pathname === "/cards"
                    ? "admin_nav-svg admin_nav-svg-active"
                    : "admin_nav-svg"
                }
                width="26"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
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
                  {" "}
                  <path
                    d="M2 12.6101H19"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M5.25 17.8101H6.96997"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M9.10986 17.8101H12.5499"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div>Settings</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="admin_nav-footer">
            <div className="admin_nav-footer-title">Saleem Jibril</div>
            <div
              className="admin_nav-footer-subtitle pointer"
              //   onClick={handleLogout}
            >
              Log out
            </div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
