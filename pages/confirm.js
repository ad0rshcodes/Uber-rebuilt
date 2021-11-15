import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/dist/client/router";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log("pickup:", pickup);
  console.log("dropoff:", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWRhcnNoLXNoYXJtYTYyMTgiLCJhIjoiY2t2bHA5bDZuMDMzNjJ3cjJjYzNuNG1ieCJ9.QdNHT48FzKYo-MW9BsMUDA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWRhcnNoLXNoYXJtYTYyMTgiLCJhIjoiY2t2bHA5bDZuMDMzNjJ3cjJjYzNuNG1ieCJ9.QdNHT48FzKYo-MW9BsMUDA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.features[0].center);
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideSelection>
        {pickupCoordinates}
        {dropoffCoordinates}
      </RideSelection>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    h-screen flex flex-col
`;

const RideSelection = tw.div`
    flex-1
`;
