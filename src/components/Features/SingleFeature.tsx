import { Typography, Button } from "antd";
import Link from "next/link";
import type { JSX } from "react";

const { Title, Paragraph } = Typography;

type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  btn: string;
  btnLink: string;
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;

  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4 flex justify-center">
      <div
        className="group dark:bg-dark border-none shadow-none"
        style={{
          width: 600,
          height: 400,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          border: "none",
          padding: 0,
        }}
      >

        <div className="relative z-10 mb-6 mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#0B68E1] text-white">
          <span className="absolute left-0 top-0 z-[-1] h-[70px] w-[70px] rotate-[25deg] rounded-2xl bg-[#0B68E1]/20 transition-transform duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>

        <Title
          level={2}
          style={{
            marginBottom: "16px",
            color: "var(--color-white)",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Title>

        <Paragraph
          style={{
            fontSize: "1rem",
            color: "var(--color-body-color, #6B7280)",
            lineHeight: 1.75,
          }}
        >
          {paragraph}
        </Paragraph>

        <Link href={btnLink} passHref>
          <Button type="link" className="dark:text-white dark:hover:text-[#0B68E1]">
            {btn}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
