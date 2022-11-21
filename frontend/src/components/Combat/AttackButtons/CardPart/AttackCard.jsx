import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import PictoCard from "./PictoCard";

function AttackCard({ typeAttack, launchCard }) {
  return (
    <motion.div
      key={launchCard === true}
      initial={{ opacity: 0, x: -150, y: 400 }}
      animate={{ opacity: 1, x: 0.2, y: 0 }}
      transition={{ duration: 1.5, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
      className="mb-6 w-24 h-32 bg-white shadow-bolder rounded-2xl mx-auto flex justify-center items-center relative z-10"
    >
      <PictoCard typeAttack={typeAttack} />
    </motion.div>
  );
}

AttackCard.propTypes = {
  typeAttack: PropTypes.string.isRequired,
  launchCard: PropTypes.bool.isRequired,
};

export default AttackCard;
