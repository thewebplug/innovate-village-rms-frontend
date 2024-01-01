import { Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
//   import AdminReports from "./Reports";
//   import AdminLayout from "../../Layouts/AdminLayout";
//   import SEO from "../shared/Seo";
import { Link } from "react-router-dom";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import Sidebar from "../../components/Sidebar";

const ScratchCards = () => {
  const [uplaodLoading, setUplaodLoading] = useState(false);

  // useEffect(() => {
  //   let dropArea = document.getElementById("drop-area");
  //   let uploadArea = document.querySelector(".reg_student-area");
  //   ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, preventDefaults, false);
  //   });

  //   function preventDefaults(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }

  //   ["dragenter", "dragover"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, highlight, false);
  //   });
  //   ["dragleave", "drop"].forEach((eventName) => {
  //     uploadArea.addEventListener(eventName, unhighlight, false);
  //   });

  //   function highlight(e) {
  //     uploadArea.classList.add("highlight");
  //   }

  //   function unhighlight(e) {
  //     uploadArea.classList.remove("highlight");
  //   }

  //   uploadArea.addEventListener("drop", handleDrop, false);

  //   function handleDrop(e) {
  //     fileUploadAndResizeImage(e.dataTransfer.files[0]);
  //     console.log("e.dataTransfer", e.dataTransfer.files);
  //   }
  // }, []);

  // const fileUploadAndResizeImage = (e) => {
  //   let file = e;
  //   let allUploadedFiles = images;

  //   if (file) {
  //     setUploadLoading(true);
  //     Resizer.imageFileResizer(
  //       file,
  //       720,
  //       720,
  //       "JPEG",
  //       100,
  //       0,
  //       (uri) => {
  //         axios
  //           .post(
  //             `https://985f1i3kbb.execute-api.us-east-1.amazonaws.com/dev/v2/upload-images`,
  //             {
  //               type: "image",
  //               item: uri,
  //             },
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${auth ? auth.token : ""}`,
  //               },
  //             }
  //           )
  //           .then((res) => {
  //             console.log("res", res);
  //             setTextLL("");
  //             // setLoading(false)
  //             allUploadedFiles.shift()
  //             allUploadedFiles.push(res?.data?.url)
  //             setImages(allUploadedFiles)
  //             console.log("allUploadedFiles", allUploadedFiles);
  //             console.log("images", images);
  //             console.log("images.length", images.length);
  //             setTextLL(" ");
  //             setUploadLoading(false);
  //           })
  //           .catch((err) => {
  //             setUploadLoading(false);
  //             console.log("CLOUDINARY UPLOAD ERR", err);
  //           });
  //       },
  //       "base64"
  //     );
  //   }
  // };

  // const handleImageRemove = (public_id) => {
  //   setUploadLoading(true);

  //   setTextLL("");

  //   let filteredImages = images.filter((item) => {
  //     if (item?.public_id) {
  //       return item?.public_id !== public_id;
  //     } else {
  //       return item?.url?.public_id !== public_id;
  //     }
  //   });
  //   setImages(filteredImages);
  //   setTextLL(" ");
  //   setUploadLoading(false);
  // };

  return (
    <div className="adminContainer">
      <Sidebar />

      <div className="adminContainer__main">
        <h1>Register Student</h1>
        <form
        // onSubmit={handleVersionUpdate}
        >
          <div className="studentForm__flex">
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <div>
                <label>Primary/Secondary</label>
                <Select
                  required
                  className="studentForm__flex-select"
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value="primary">Primary</MenuItem>
                  <MenuItem value="secondary">Secondary</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className="studentForm__flex">
            <div>
              <label>Class</label>
              <Select
                required
                // onChange={handleChange}
                className="studentForm__flex-select"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="jss1">Jss 1</MenuItem>
                <MenuItem value="jss2">Jss 2</MenuItem>
              </Select>
            </div>
          </div>

          <div className="reg-student-upload-label">Upload student image</div>

          <div className="uploadedImages">
            {/* {images?.map((item) => (
                      <Badge
                        overlap="circular"
                        // onClick={() =>
                        //   handleImageRemove(
                        //     item?.public_id
                        //       ? item?.public_id
                        //       : item?.url?.public_id
                        //   )
                        // }
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        badgeContent={
                          <CancelSharpIcon
                            color="error"
                            sx={{ cursor: "pointer" }}
                          />
                        }
                      >
                        <img
                          className="uploadedImages__image"
                          src={item?.url}
                        />
                      </Badge>
                    ))} */}
          </div>
          <label className="dropAreaContainer">
            <input
              type="file"
              multiple
              accept="image/*"
              hidden
              //   onChange={(e) =>
              //     fileUploadAndResizeImage(e?.target?.files[0])
              //   }
              // ref={mediaRef}
            />
            <div id="drop-area">
              <div className="reg_student-area">
                {uplaodLoading ? (
                  <div></div>
                ) : (
                  //   <LoadingIcon />
                  <div>
                    {/* <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30.2188 17.5781C30.2188 17.8868 30.0996 18.1828 29.8876 18.4011C29.6756 18.6193 29.388 18.742 29.0882 18.742H19.1306V28.9924C19.1306 29.3011 19.0115 29.5971 18.7994 29.8154C18.5874 30.0336 18.2998 30.1562 18 30.1562C17.7002 30.1562 17.4126 30.0336 17.2006 29.8154C16.9885 29.5971 16.8694 29.3011 16.8694 28.9924V18.742H6.91183C6.61198 18.742 6.32441 18.6193 6.11239 18.4011C5.90036 18.1828 5.78125 17.8868 5.78125 17.5781C5.78125 17.2695 5.90036 16.9734 6.11239 16.7552C6.32441 16.5369 6.61198 16.4143 6.91183 16.4143H16.8694V6.16383C16.8694 5.85517 16.9885 5.55914 17.2006 5.34088C17.4126 5.12262 17.7002 5 18 5C18.2998 5 18.5874 5.12262 18.7994 5.34088C19.0115 5.55914 19.1306 5.85517 19.1306 6.16383V16.4143H29.0882C29.388 16.4143 29.6756 16.5369 29.8876 16.7552C30.0996 16.9734 30.2188 17.2695 30.2188 17.5781Z"
                                fill="#F0F0F0"
                              />
                            </svg> */}
                    <div>Choose an image</div>
                    <div>or drag it here</div>
                  </div>
                )}
              </div>
            </div>
          </label>
          <button className="largeButton" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScratchCards;
