import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

type Props = {
  title: string;
};

const Share = ({ title }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full md:w-[35%] shadow p-5 border border-gray-200 rounded">
      <p className="text-[24px] font-[700] text-sky-950 text-center">
        Support further! Spread the word and share in the reward.
      </p>
      <div className="relative w-[200px] h-[200px] mx-auto mt-5">
        <Image
          src="/images/networking.png"
          alt={"share"}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex gap-3 justify-center mt-7">
        <LinkedinShareButton url={`https://give-aid-fe.vercel.app/${router.asPath}`} title={title}>
          <LinkedinIcon size={50} round />
        </LinkedinShareButton>

        <TwitterShareButton
          url={`https://give-aid-fe.vercel.app/${router.asPath}`}
          title={title}
          via="YourTwitterHandle"
        >
          <XIcon size={50} round />
        </TwitterShareButton>

        <WhatsappShareButton url={`https://give-aid-fe.vercel.app/${router.asPath}`} title={title}>
          <WhatsappIcon size={50} round />
        </WhatsappShareButton>

        <TelegramShareButton url={`https://give-aid-fe.vercel.app/${router.asPath}`} title={title}>
          <TelegramIcon size={50} round />
        </TelegramShareButton>

        <FacebookShareButton url={`https://give-aid-fe.vercel.app/${router.asPath}`} hashtag="Charity #Education">
          <FacebookIcon size={50} round />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default Share;
