import React from "react";
import { motion } from "framer-motion";
import "../styles/footer.css";
import firstPic from "../images/man.avif";
import secondPic from "../images/boy.avif";
import { FaInstagramSquare,FaGithubSquare,FaLinkedin,FaEnvelopeSquare} from "react-icons/fa";
import { GoLocation} from "react-icons/go";
import { AiFillHeart} from "react-icons/ai";

function Footer() {
  return (
    <div className="footerMain">
      <div className="footerHead">
        <h2>Location Independent Web Developer</h2>
      </div>
      <div className="footerBody">
        <div>
          <br className="bodyBreak"/>
          <br className="bodyBreak"/>
          <br/>
          <li>I Develop things with <AiFillHeart color="red" size={15}/></li>
          <br/>
          <li>Design & Development</li>
          <br/>
          <li>Experience in Working in a Team as well as solo </li>
          <br/>
          <li>Customer Specific Design</li>
        </div>
        <div>
        <br />
          <br className="footerBreak"/>
          <br className="footerBreak"/>
          <p>FIND ME AT:</p>
          <a  href="https://github.com/Ajitesh72">
            <FaGithubSquare size = '36' className="icons_img"color="white"/>
            </a>

            <a href="mailto: dubeyajitesh07@gmail.com">
            <FaEnvelopeSquare size ='36'className="icons_img" color="white"/>
            </a>

            <a href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/">
            <FaLinkedin size ='36'className="icons_img" color="white"/>
            </a>
            <a href="https://goo.gl/maps/uYB9owNjL5ZZwv2v8">
            <GoLocation size ='36'className="icons_img" color="white" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
