import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  // const map = new mapboxgl.Map({
  //   container: "YOUR_CONTAINER_ELEMENT_ID",
  //   style: "mapbox://styles/mapbox/streets-v11",
  // });

  return (
    <Wrapper>
      <Map />
      <Main></Main>
    </Wrapper>
  );
}

const Wrapper = tw.div`

  flex flex-col bg-gray-500 h-screen		

`;

const Main = tw.div`
  flex-1 bg-red-400	
`;
