import { IMAGE_BASE_URL } from "../constants";
import { OurTeamSocialLinksEntity } from "../lib/axios/types";
import Social from "./shared/Social";

interface Props {
  id: number;
  img: string;
  name: string;
  description: string;
  socialLinks?: OurTeamSocialLinksEntity[];
  className?: string;
}

function TeamMemberCard_1({
  className = "",
  id,
  img,
  name,
  description,
  socialLinks = [],
}: Props) {
  return (
    <div key={id} className={"w-full max-w-sm " + className}>
      <img
        alt=""
        src={IMAGE_BASE_URL + img}
        className="w-full h-[300px] object-cover max-w-sm rounded-xl block mx-auto shadow-md shadow-black/10"
      />
      <div className="mt-4 px-2 flex flex-col gap-y-1">
        <p className="text-lg text-slate-800 font-medium">{name}</p>
        <p className="text-sm tracking-wide text-slate-700/90 font-normal">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-x-3">
          {socialLinks.map((socialLink) => (
            <Social
              key={`our-team-social-${id}`}
              title={socialLink.title}
              icon={socialLink.icon.data}
              link={socialLink.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard_1;
