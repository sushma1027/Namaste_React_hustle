import { LOGO_URL } from "../utils/constants";
import {useState} from "react";




const Header =()=>{

const[reactNewBtn, setreactNewBtn ]=useState("login");

  return(
        <div className="headers">
          <div className="logo-container">
            <img  className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-bars">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Cart</li>
              <button className="checkedvalue" onClick={()=>{
                reactNewBtn==="login"?setreactNewBtn("logout"):setreactNewBtn("login");
              }}>{reactNewBtn}</button>
            </ul>
          </div>
        </div>
  )
}

export default Header;