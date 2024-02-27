import { ReactNode } from "react";

interface Props {
  title: string;
  link: string;
  icon: ReactNode;
}

const Social = ({ title, link, icon }: Props) => {
  return (
    <a href={link} target="_blank">
      <img
        className="object-cover w-8 h-8"
        src="/assets/icons/icons8-telegram-50.png"
        alt={title}
      />
    </a>
  );
};

export default Social;
