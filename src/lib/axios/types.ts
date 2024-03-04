interface Meta {
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

/* -------------------------------------------------------------------------- */
/*                               ABOUT US TYPES                               */
/* -------------------------------------------------------------------------- */
export interface AboutUsResponse {
  data: AboutUsData;
  meta: Meta;
}
export interface AboutUsData {
  id: number;
  attributes: AboutUsAttributes;
}
export interface AboutUsAttributes {
  name: string;
  description: string;
  phone_1: string;
  phone_2: string;
  email_1: string;
  email_2?: null;
  latitude: number;
  longitude: number;
  address: string;
  createdAt: string;
  updatedAt: string;
  socials?: AboutUsSocialsEntity[] | null;
  image: AboutUsImage;
}
export interface AboutUsSocialsEntity {
  id: number;
  title: string;
  link: string;
  icon: AboutUsIcon;
}
export interface AboutUsIcon {
  data?: AboutUsData1 | null;
}
export interface AboutUsData1 {
  id: number;
  attributes: AboutUsAttributes1;
}
export interface AboutUsAttributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats?: AboutUsFormats | null;
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
export interface AboutUsFormats {
  thumbnail: AboutUsThumbnailOrSmallOrMediumOrLarge;
  small: AboutUsThumbnailOrSmallOrMediumOrLarge;
}
export interface AboutUsThumbnailOrSmallOrMediumOrLarge {
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
export interface AboutUsImage {
  data: AboutUsData2;
}
export interface AboutUsData2 {
  id: number;
  attributes: AboutUsAttributes2;
}
export interface AboutUsAttributes2 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: AboutUsFormats1;
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
export interface AboutUsFormats1 {
  thumbnail: AboutUsThumbnailOrSmallOrMediumOrLarge;
  medium: AboutUsThumbnailOrSmallOrMediumOrLarge;
  small: AboutUsThumbnailOrSmallOrMediumOrLarge;
  large: AboutUsThumbnailOrSmallOrMediumOrLarge;
}

/* -------------------------------------------------------------------------- */
/*                               OUR TEAM TYPES                               */
/* -------------------------------------------------------------------------- */
export interface OurTeamResponse {
  data: OurTeamData;
  meta: Meta;
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

/* -------------------------------------------------------------------------- */
/*                                FOOTER TYPES                                */
/* -------------------------------------------------------------------------- */
export interface FooterResponse {
  data: FooterData;
  meta: Meta;
}
export interface FooterData {
  id: number;
  attributes: FooterAttributes;
}
export interface FooterAttributes {
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  Links?: FooterLinksEntity[] | null;
}
export interface FooterLinksEntity {
  id: number;
  title: string;
  links?: FooterLinksEntity1[] | null;
}
export interface FooterLinksEntity1 {
  id: number;
  title: string;
  link: string;
}

/* -------------------------------------------------------------------------- */
/*                                ARTICLE TYPES                               */
/* -------------------------------------------------------------------------- */
export interface ArticleResponse {
  data?: ArticleDataEntity[] | null;
  meta: Meta;
}
export interface ArticleDataEntity {
  id: number;
  attributes: ArticleAttributes;
}
export interface ArticleAttributes {
  name: string;
  description: string;
  thumbnail: ArticleThumbnail;
}
export interface ArticleThumbnail {
  data: ArticleData;
}
export interface ArticleData {
  id: number;
  attributes: ArticleAttributes1;
}
export interface ArticleAttributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: ArticleFormats;
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
export interface ArticleFormats {
  thumbnail: ArticleThumbnailOrSmall;
  small: ArticleThumbnailOrSmall;
}
export interface ArticleThumbnailOrSmall {
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
/* -------------------------------------------------------------------------- */
/*                            SINGLE ARTICLE TYPES                            */
/* -------------------------------------------------------------------------- */
export interface SingleArticeResponse {
  data: SingleArticeData;
  meta: Meta;
}
export interface SingleArticeData {
  id: number;
  attributes: SingleArticeAttributes;
}
export interface SingleArticeAttributes {
  name: string;
  description: string;
  keywords: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: SingleArticeAuthor;
  thumbnail: SingleArticeThumbnail;
  cover: SingleArticeCover;
}
export interface SingleArticeAuthor {
  data: SingleArticeData1;
}
export interface SingleArticeData1 {
  id: number;
  attributes: SingleArticeAttributes1;
}
export interface SingleArticeAttributes1 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  user_role: string;
}
export interface SingleArticeThumbnail {
  data: SingleArticeData2;
}
export interface SingleArticeData2 {
  id: number;
  attributes: SingleArticeAttributes2;
}
export interface SingleArticeAttributes2 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: SingleArticeFormats;
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
export interface SingleArticeFormats {
  thumbnail: SingleArticeThumbnailOrSmall;
  small: SingleArticeThumbnailOrSmall;
}
export interface SingleArticeThumbnailOrSmall {
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
export interface SingleArticeCover {
  data: SingleArticeData3;
}
export interface SingleArticeData3 {
  id: number;
  attributes: SingleArticeAttributes3;
}
export interface SingleArticeAttributes3 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats?: null;
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

/* -------------------------------------------------------------------------- */
/*                               COMMENTS TYPES                               */
/* -------------------------------------------------------------------------- */
export interface ArticleCommentsResponse {
  data: ArticleCommentsData[];
  meta: Meta;
}

export interface ArticleCommentsData {
  id: number;
  attributes: ArticleCommentsAttributes;
}

export interface ArticleCommentsAttributes {
  content: string;
  status: string;
  reply: string;
  createdAt: string;
  updatedAt: string;
  author: ArticleCommentsAuthor;
}

export interface ArticleCommentsAuthor {
  data: AuthorData;
}

export interface AuthorData {
  id: number;
  attributes: ArticleCommentsAttributes2;
}

export interface ArticleCommentsAttributes2 {
  username: string;
}
