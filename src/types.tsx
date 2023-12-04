export interface Campaign {
  allHeroes: Hero[];
}

type Hero = {
  name: string;
  alive: boolean;
  current: boolean;
  code: string;
};
