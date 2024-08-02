import styled from "styled-components";

export const PlusIcon = ({
  width = "20",
  height = "20",
  stroke = "#8A2B06",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 4.16675V15.8334"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16669 10H15.8334"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
