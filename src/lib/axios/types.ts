export interface AboutUsResponse {
  data: Data;
  meta: Meta;
}
export interface Data {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
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
  socials?: SocialsEntity[] | null;
}
export interface SocialsEntity {
  id: number;
  title: string;
  link: string;
  icon: Icon;
}
export interface Icon {
  data?: null;
}
export interface Meta {}
