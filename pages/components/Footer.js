import React from "react";
import Link from "next/dist/client/link";
import tw from "tailwind-styled-components";

export default function Footer() {
  return (
    <div>
      <SourceLinks>
        <SocialIcons>
          <Link href="https://github.com/adarsh-sharma6218" passHref={true}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/adarsh-sharma6218/"
            passHref={true}
          >
            <img src="https://img.icons8.com/material/24/000000/linkedin--v3.png" />
          </Link>

          <Link href="https://instagram.com/adarshsharma6218" passHref={true}>
            <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
          </Link>
        </SocialIcons>

        <Names>
          Made with 🚀 by:
          <Link href="https://adarshsharma.ml/" passHref={true}>
            Adarsh Sharma
          </Link>
        </Names>
      </SourceLinks>
    </div>
  );
}

const SourceLinks = tw.div`

  m-6

`;

const SocialIcons = tw.div`
  flex justify-center gap-4 cursor-pointer

`;

const Names = tw.div`
  flex justify-center pt-4 text-gray-500

`;
