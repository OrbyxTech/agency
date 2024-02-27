import { OurTeamMembersEntity } from "../lib/axios/types";
import getBaseUrl from "../utils/base-url";
import ReadMoreButton_1 from "./ReadMoreButton_1";
import TeamMemberCard_1 from "./TeamMemberCard_1";

interface Props {
  className: string;
  teamMembers: OurTeamMembersEntity[];
  readMoreButtonText: string;
  title: string;
  subtitle: string;
  showTopSection?: boolean;
}

function OurTeamSection({
  className,
  teamMembers = [],
  readMoreButtonText,
  subtitle,
  title,
  showTopSection = true,
}: Props) {
  console.log(teamMembers);

  return (
    <div className={"w-full " + className}>
      {showTopSection ? (
        <div className="w-full flex max-md:flex-col max-md:items-start max-md:gap-y-5 items-center justify-between">
          <div>
            <p className="text-3xl lg:text-4xl text-slate-800 font-normal tracking-wide">
              {title}
            </p>
            <p className="mt-3 text-slate-600 font-normal leading-6 text-base max-w-xl">
              {subtitle}
            </p>
          </div>

          <ReadMoreButton_1 text={readMoreButtonText} />
        </div>
      ) : (
        false
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 gap-6 place-items-center
                ${showTopSection ? "mt-12" : ""}`}
      >
        {teamMembers?.map((member) => (
          <TeamMemberCard_1
            id={member.id}
            img={member.image.data.attributes.url}
            name={`${member.firstName} ${member.lastName}`}
            description={member.description}
            socialLinks={member.social_links}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeamSection;
