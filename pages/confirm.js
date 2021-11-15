import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const confirm = () => {
  return (
    <Wrapper>
      <Map />
      <RideSelection></RideSelection>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
    h-screen flex flex-col
`;

const RideSelection = tw.div`
    flex-1

`;
