import React from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      {carList.map((data, index) => (
        <CarList key={index}>
          <Car>
            <CarInfo>
              <CarImg src={data.imgUrl}></CarImg>
              <CarDescription>
                <CarTitle>{data.service}</CarTitle>
                <CarTime> 5 mins away</CarTime>
              </CarDescription>
            </CarInfo>
            <RidePrice>$20.32</RidePrice>
          </Car>
        </CarList>
      ))}
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
 max-h-60 overflow-auto
`;

const Title = tw.div`
text-center text-xs text-gray-500 py-2 border-b
`;

const CarList = tw.div`
`;

const Car = tw.div`
flex justify-between items-center px-5 cursor-pointer
`;

const CarInfo = tw.div`
flex
`;

const CarImg = tw.img`
w-20
`;

const CarDescription = tw.div`
flex flex-col justify-center mx-4
`;
const CarTitle = tw.div`
font-medium
`;
const CarTime = tw.div`
text-blue-500 text-xs
`;
const RidePrice = tw.div`
text-sm
`;
