import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration from Mapbox API
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYWRhcnNoLXNoYXJtYTYyMTgiLCJhIjoiY2t2bHA5bDZuMDMzNjJ3cjJjYzNuNG1ieCJ9.QdNHT48FzKYo-MW9BsMUDA`
    ) //*Back ticks are called template literals
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      {/* Ride options along with their prices.*/}
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
            <RidePrice>
              {"$" + (rideDuration * data.multiplier).toFixed(2)}
            </RidePrice>
          </Car>
        </CarList>
      ))}
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
 max-h-96 overflow-auto
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
