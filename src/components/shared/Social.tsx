import { IMAGE_BASE_URL } from "../../constants";

interface Props {
  title: string;
  link: string;
  icon: string;
}

const Social = ({ title, link, icon }: Props) => {
  return (
    <a href={link} target="_blank" className="text-sm">
      {
        icon && icon?.trim() !== ""
          ?
          <img
            className="object-cover w-8 h-8"
            src={IMAGE_BASE_URL + icon}
            alt={title}
          />
          :
          title
      }
    </a>
  );
};

export default Social;
