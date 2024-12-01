import React from "react";
import "./completeprint.css";
import logo2 from "../../assets/oisp-official-logo01-1@2x.png";
import logo3 from "../../assets/container.png";
import Button from "react-bootstrap/Button";
import page1 from "../../assets/18696 1.png";
import Footer from "../../utils/footer";
import Header from "../../utils/header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Completeprint = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const verifyAuthentication = async () => {
    if (!cookies.token) {
      navigate("/Login1");
    }
    const { data } = await axios.post(
      "http://localhost:3001/accounts",
      {},
      { withCredentials: true }
    );
    const { status, user } = data;
    setUsername(user);
    return status ? <></> : (removeCookie("token"), navigate("/Login1"));
  };
  useEffect(() => {
    verifyAuthentication();
  }, [cookies, navigate, removeCookie]);
  return (
    <div
      style={{
        background: "var(--neutral-colors-white)",
        fontSize: "var(--font-size-lg)",
        color: "var(--neutral-colors-headings-black)",
        fontFamily: "var(--font-andika)",
      }}
    >
      <Header></Header>
      <div className="BB">
        <img className="page1" src={page1} alt="" />
        <div className="somethingwrong">
          Tài liệu của bạn đang được in tại máy in...
        </div>
        <p className="wrongtext1">
          Hãy đến ngay máy in nhận tài liệu để tránh thất lạc.
        </p>
        <div className="button-scale">
          <div className="button-set20ab">
            <button
              className="master-primary-button1a"
              onClick={() => navigate("/Upload")}
            >
              Tải lên và in tiếp
            </button>
          </div>
          <div className="button-set22ab">
            <button
              className="master-secondary-button1a"
              onClick={() => navigate("/Home")}
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Completeprint;
