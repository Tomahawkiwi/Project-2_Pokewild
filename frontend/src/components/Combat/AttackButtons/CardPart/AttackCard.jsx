import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import PictoCard from "./PictoCard";

function AttackCard({ typeAttack, isCard, initialX, initialY }) {
  return (
    <motion.div
      key={isCard}
      initial={{ opacity: 0.3, x: initialX, y: initialY, scale: 1.5 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 2, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
      className="w-[70px] sm:w-[100px] h-[100px] sm:h-[135px] bg-white shadow-bolder rounded-2xl mx-auto flex justify-center items-center relative z-10"
    >
      <PictoCard typeAttack={typeAttack} />
    </motion.div>
  );
}

AttackCard.propTypes = {
  typeAttack: PropTypes.string.isRequired,
  isCard: PropTypes.bool.isRequired,
  initialX: PropTypes.number.isRequired,
  initialY: PropTypes.number.isRequired,
};

export default AttackCard;
