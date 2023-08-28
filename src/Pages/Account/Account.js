import React, { useRef, useState } from "react";
import "./Account.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { IconButton } from "@material-ui/core";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Account = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundImageprofilepic, setBackgroundImageprofilepic] =
    useState("");

  const imageInputRef = useRef(null);
  const imageInputRefprofilepic = useRef(null);

  const handleImageChange = (e) => {
    console.log("hello world ");
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setBackgroundImage(`url(${imageUrl})`);
    }
  };
  const handleImageChangeprofilepic = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      console.log("Iùage url ", imageUrl);
      setBackgroundImageprofilepic(imageUrl);
    }
  };
  const handleClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  const handleClickprofilepic = () => {
    if (imageInputRefprofilepic.current) {
      imageInputRefprofilepic.current.click();
    }
  };

  const divStyle = {
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",

    backgroundPosition: "center",
    backgroundImage: backgroundImage,
    //cursor: "pointer",
    position: "relative",
    flex: 1,
    height: "100%",
    with: "100%",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  };
  const divStyleprofilepic = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "end",
    //backgroundPosition: "start",
    Image: backgroundImageprofilepic,
    cursor: "pointer",
    Zindex: 99999,
    //position: "relative",
    //flex: 1,

    width: "180px",
    height: "180px",
    borderRadius: "100%",
    //padding: "20px",
    marginLeft: "20px",
    // marginTop: "140px",
  };
  const fileInputStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  };
  const fileInputStyleprofilepic = {
    //position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
    //backgroundColor: "red",
  };
  return (
    <div className="outerDivStyle">
      <div className="container">
        <div className="container1">
          <div className="innerDivStyle1">
            <div className="innerDivStyle11">
              <div style={divStyle}>
                <div className="Test" onClick={handleClickprofilepic}>
                  <input
                    type="file"
                    id="imageInput2"
                    accept="image/*"
                    style={fileInputStyleprofilepic}
                    ref={imageInputRefprofilepic}
                    onChange={handleImageChangeprofilepic}
                  />
                  <img
                    src={backgroundImageprofilepic}
                    alt="ProfilePic2"
                    style={divStyleprofilepic}
                  />
                </div>

                <IconButton
                  component="span"
                  color="primary"
                  onClick={handleClick}
                >
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    style={fileInputStyle}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                  />
                  <CameraAltIcon fontSize="large" />
                </IconButton>
              </div>
            </div>

            <div className="innerDivStyle12">
              <div className="innerDivStyle122">
                <h2 className="doctorUsername">Dr username</h2>
                <p>Dr full name</p>
                <p>Dr specialty</p>
              </div>
              <div className="innerDivStyle123">
                <div>
                  <div className="iconAndText">
                    <LocationOnIcon fontSize="small" />
                    <p>Dr address</p>
                  </div>
                  <div className="iconAndText">
                    <PhoneIcon fontSize="small" />
                    <p>Dr numbers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="innerDivStyle2">
            <div className="innerDivStyle21">{/*add posts here  */}</div>
          </div>
        </div>

        <div className="innerDivStyle3"></div>
      </div>
    </div>
  );
};

export default Account;
