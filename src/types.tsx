export interface Campaign {
  allHeroes: Hero[];
}

type Hero = {
  imagesrc: string;
  name: string;
  alive: boolean;
  current: boolean;
  code: string;
};
