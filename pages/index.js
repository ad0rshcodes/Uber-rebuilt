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
          <a href="#">
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          </a>
          <Profile>
            <Name>Adarsh Sharma</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C5603AQHZBFgdG0WGDw/profile-displayphoto-shrink_200_200/0/1631380647000?e=1640822400&v=beta&t=x6ELTEZJvUp3arM1mdbw3-z4d4W5Gwgg3I9LP81cV88" />
          </Profile>
        </Header>

        <ActionButtons>
          <Button>
            <ButtonImg src="https://i.ibb.co/Xx4G91m/uberblack.png"></ButtonImg>
            Ride
          </Button>
          <Button>
            <ButtonImg src="https://i.ibb.co/n776JLm/bike.png"></ButtonImg>
            Wheels
          </Button>
          <Button>
            <ButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"></ButtonImg>
            Schedule
          </Button>
        </ActionButtons>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`

  flex flex-col bg-white	 h-screen		

`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex  justify-between
`;

const UberLogo = tw.img`
  h-28 
`;

const Profile = tw.div`
  flex justify-end items-center
`;

const Name = tw.div`
  mx-4
`;

const UserImage = tw.img`
rounded-full w-14 border-gray-800 border-2
`;

const ActionButtons = tw.div`
  flex justify-center 

`;

const Button = tw.div`
    flex bg-gray-200 rounded-lg shadow-lg mx-3 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex-col flex-1 transition text-xl transform hover:scale-105

`;

const ButtonImg = tw.img`
  h-28
`;
