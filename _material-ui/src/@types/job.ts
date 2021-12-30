import { StringValueNode } from "graphql";

export type ICity = {
  id: string;
  name: string;
  country: ICountry;
};

export type ITag = {
  id: string;
  name: string;
};

export type ICompany = {
  id: string;
  logoUrl: string | null;
  name: string;
  websiteUrl: string | null;
  _typeName: string;
};

export type IRemote = {
  id: string;
  name: string;
  type: string;
};

export type ICountry = {
  id: string;
  name: string;
  isoCode: StringValueNode;
};

export type IJob = {
  cities: Array<ICity>;
  company: ICompany;
  id: string;
  countries: Array<ICountry>;
  title: string;
  _typename: string;
  tags: Array<ITag>;
  remotes: Array<IRemote>;
};
