/* -------------------------------------------------------------------------- */
/*                               ABOUT US TYPES                               */
/* -------------------------------------------------------------------------- */
export interface AboutUsResponse {
  data: AboutUsData;
  meta: AboutUsMeta;
}
export interface AboutUsData {
  id: number;
  attributes: AboutUsAttributes;
}
export interface AboutUsAttributes {
  name: string;
  description: string;
  phone_1: string | null;
  phone_2: string | null;
  email_1: string | null;
  email_2: string | null;
  latitude: number;
  longitude: number;
  address: string;
  createdAt: string;
  updatedAt: string;
  socials?: AboutUsSocialsEntity[] | null;
}
export interface AboutUsSocialsEntity {
  id: number;
  title: string;
  link: string;
  icon: AboutUsIcon;
}
export interface AboutUsIcon {
  data?: null;
}
export interface AboutUsMeta {}

/* -------------------------------------------------------------------------- */
/*                               OUR TEAM TYPES                               */
/* -------------------------------------------------------------------------- */
export interface OurTeamResponse {
  data: OurTeamData;
  meta: OurTeamMeta;
}
export interface OurTeamData {
  id: number;
  attributes: OurTeamAttributes;
}
export interface OurTeamAttributes {
  createdAt: string;
  updatedAt: string;
  members?: OurTeamMembersEntity[] | null;
}
export interface OurTeamMembersEntity {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  social_links?: OurTeamSocialLinksEntity[] | null;
  image: OurTeamImage;
}
export interface OurTeamSocialLinksEntity {
  id: number;
  title: string;
  link: string;
  icon: OurTeamIcon;
}
export interface OurTeamIcon {
  data?: null;
}
export interface OurTeamImage {
  data: OurTeamData1;
}
export interface OurTeamData1 {
  id: number;
  attributes: OurTeamAttributes1;
}
export interface OurTeamAttributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: OurTeamFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface OurTeamFormats {
  thumbnail: OurTeamThumbnailOrMediumOrSmallOrLarge;
  medium: OurTeamThumbnailOrMediumOrSmallOrLarge;
  small: OurTeamThumbnailOrMediumOrSmallOrLarge;
  large?: OurTeamThumbnailOrMediumOrSmallOrLarge1 | null;
}
export interface OurTeamThumbnailOrMediumOrSmallOrLarge {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface OurTeamThumbnailOrMediumOrSmallOrLarge1 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface OurTeamMeta {}
