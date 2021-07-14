import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../Redux/Actions/ActionLogin";

import BrandName from "../Assets/image/brand-name.svg";
import BrandLogo from "../Assets/image/brand-logo.svg";
import Profile from "../Assets/image/profile.png";

function Header() {
  const dispatch = useDispatch();
  const checkLogin = useSelector((state) => state.login);
  console.log(checkLogin.isLogin);
  return (
    <div style={{ boxShadow: "0px 1px 15px 5px rgba(0,0,0,0.25)" }}>
      <main className="container">
        <div className="d-flex header-section">
          <div className="brand-section">
            <img src={BrandName} alt="Land Tick" className="mr-1" />
            <img src={BrandLogo} alt="Logo" />
          </div>

          <div className="button-section">
            {!checkLogin.isLogin ? (
              <>
                <button className="btn btn-secondary mr-2">Daftar</button>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(login())}
                >
                  Login
                </button>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <h2 className="mr-2">Anto</h2>
                <div className="img-wrapper" onClick={() => dispatch(logout())}>
                  <img src={Profile} alt="" className="img-profile" />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Header;
