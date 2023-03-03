import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import "../styles/loading.css";
import mygif from "../images/loading.webp";

function Loading() {
  let navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/home")
    }, 6500);
  }, [navigate]);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 3 }}
    transition={{ duration: 3 }}
    className="loading">
      <div className="beforeLoad">
        <img src={mygif} alt="" width={500} style={{ borderRadius: "90" }} />
      </div>
    </motion.div>
  );
}

export default Loading;
