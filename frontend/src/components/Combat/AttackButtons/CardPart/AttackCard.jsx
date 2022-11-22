import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import PictoCard from "./PictoCard";

function AttackCard({ typeAttack, isCard, initialX, initialY }) {
  return (
    <motion.div
      key={isCard}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.5, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
      className="mb-6 w-24 h-32 bg-white shadow-bolder rounded-2xl mx-auto flex justify-center items-center relative z-10"
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
