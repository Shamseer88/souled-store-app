import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Star({ rating }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} color="#117a7a" />
  ));

  return <>{stars}</>;
}
