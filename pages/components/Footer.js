import React from "react";
import Link from "next/dist/client/link";
import tw from "tailwind-styled-components";

export default function Footer() {
  return (
    <div>
      <SourceLinks>
        <SocialIcons>
          <Link href="https://github.com/adarshsharma-me" passHref={true}>
            <a target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt="gitHub"
              />
            </a>
          </Link>

          <Link
            href="https://www.linkedin.com/in/adarshsharma-me/"
            passHref={true}
          >
            <a target="_blank">
              <img src="https://img.icons8.com/material/24/000000/linkedin--v3.png" />
            </a>
          </Link>

          <Link href="https://instagram.com/adarshsharma.me" passHref={true}>
            <a target="_blank">
              <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
            </a>
          </Link>
        </SocialIcons>

        <Names>
          Made with 🚀 by:
          <Link href="https://adarshsharma.me" passHref={true}>
            <a target="_blank">Adarsh Sharma</a>
          </Link>
        </Names>
      </SourceLinks>
    </div>
  );
}

const SourceLinks = tw.div`
  m-5
`;

const SocialIcons = tw.div`
  flex justify-center gap-4 cursor-pointer
`;

const Names = tw.div`
  flex justify-center pt-4 text-gray-500
`;
