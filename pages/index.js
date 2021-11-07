import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          {/* Uber logo */}
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name> Adarsh</Name>
            <UserImage src="" />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`

  flex flex-col bg-gray-500 h-screen		

`;

const ActionItems = tw.div`
  flex-1
`;

const Header = tw.div`
  
`;

const UberLogo = tw.img`
  h-28

`;

const Profile = tw.div`

`;

const Name = tw.div`

`;

const UserImage = tw.img`
`;
