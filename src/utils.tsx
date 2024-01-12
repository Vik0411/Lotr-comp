import { Hero, Scenario, changedAttrs, changedAttrsScenario } from "./types";

export function filterHeroes(obj: changedAttrs, allHeroes: Hero[]) {
  let { alive, current } = obj;
  let her = allHeroes.filter(
    (hero) => hero.alive === alive && hero.current === current
  );
  return her;
}

export function filterScenarios(
  obj: changedAttrsScenario,
  scenarios: Scenario[]
) {
  let { won, current } = obj;
  let scen = scenarios.filter(
    (scenario) => scenario.won === won && scenario.current === current
  );
  return scen;
}

export function doesHaveImage(borb: string, what: string) {
  if (what === "boon") {
    const imageNames =
      "src/images/bb/Amarthiúl's-Courage.jpg src/images/bb/Andúril.jpg src/images/bb/Appointed-by-Fate.jpg src/images/bb/Armor-Plating.jpg src/images/bb/Army-of-the-Dead-Objective-Ally.jpg src/images/bb/Ballista.jpg src/images/bb/Berelind.jpg src/images/bb/Beyond-All-Hope.jpg src/images/bb/Black-Key.jpg src/images/bb/Brace-of-Coneys.jpg src/images/bb/Chieftain's-Brooch.jpg src/images/bb/Coruhaer.jpg src/images/bb/Cunning.jpg src/images/bb/Daechanar's-Brand.jpg src/images/bb/Determination.jpg src/images/bb/Elrond's-Champion.jpg src/images/bb/Esquire-of-Gondor.jpg src/images/bb/Esquire-of-Rohan.jpg src/images/bb/Forewarned.jpg src/images/bb/Gildor-Inglorion.jpg src/images/bb/Glamdring.jpg src/images/bb/Gwaihir.jpg src/images/bb/Hands-of-a-Healer.jpg src/images/bb/Hardy.jpg src/images/bb/Heirloom-of-Iârchon.jpg src/images/bb/Ho-Tom-Bombadil.jpg src/images/bb/Iârion's-Pendant.jpg src/images/bb/Intimidation.jpg src/images/bb/Laermuin.jpg src/images/bb/Leader-of-Men.jpg src/images/bb/Leaf-wrapped-Lembas.jpg src/images/bb/Lore-of-Ancient-Arnor.jpg src/images/bb/Lórien-Rope.jpg src/images/bb/Mail-of-Eärnur.jpg src/images/bb/Mendor.jpg src/images/bb/Mendor's-Support.jpg src/images/bb/Mithril-Shirt.jpg src/images/bb/Mr-Underhill.jpg src/images/bb/No-Time-to-Waste.jpg src/images/bb/Noble-Hero.jpg src/images/bb/Old-Bogey-stories.jpg src/images/bb/Orders-from-Angmar.jpg src/images/bb/Palantír-of-Orthanc.jpg src/images/bb/Phial-of-Galadriel.jpg src/images/bb/Raiment-of-the-Second-Age - kopie.jpg src/images/bb/Raiment-of-the-Second-Age.jpg src/images/bb/Ranger-Sense.jpg src/images/bb/Resolute.jpg src/images/bb/Rivendell-Skirmishers.jpg src/images/bb/Ruthless.jpg src/images/bb/Silverthorn.jpg src/images/bb/Skilled-Healer.jpg src/images/bb/Spyglass.jpg src/images/bb/Stalwart.jpg src/images/bb/Sting.jpg src/images/bb/The-Fervor-of-Lore.jpg src/images/bb/The-Might-of-Tactics.jpg src/images/bb/The-Power-of-Spirit - kopie.jpg src/images/bb/The-Power-of-Spirit.jpg src/images/bb/The-Secret-of-Leadership - kopie.jpg src/images/bb/The-Secret-of-Leadership.jpg src/images/bb/Three-Golden-Hairs - kopie.jpg src/images/bb/Three-Golden-Hairs.jpg src/images/bb/Tireless-Ranger.jpg src/images/bb/Valiant-Warrior.jpg src/images/bb/Valor.jpg";
    return imageNames.includes("/" + borb);
  }
  if (what === "burden") {
    const imageNames =
      " Thaurdir's-Spite.jpg, The-Searching-Eye.jpg, Protect-the-Innocent.jpg, Arnor-ravaged.jpg, A-Heavy-Burden.jpg, Fear-of-discovery.png, Gandalf's-Delay.jpeg, Graxar.webp, Guilty-Conscience.jpg, Ill-Fate.jpg, Losing-Time.jpg, Lust-for-the-Ring.jpeg, Overcome-by-Grief.jpeg, Overcome-by-Terror.png, Panicked.jpg, Persued-by-the-Enemy.jpeg, Scarred.jpg, Stalking-Goblin.jpg, Thaurdir's-Legacy.png, Weight-of-the-Ring.jpg";
    return imageNames.toLowerCase().includes(" " + borb + ".");
  }
}

export const boons = [
  "Amarthiúl's-Courage.jpg",
  "Andúril.jpg",
  "Appointed-by-Fate.jpg",
  "Armor-Plating.jpg",
  "Army-of-the-Dead-Objective-Ally.jpg",
  "Ballista.jpg",
  "Berelind.jpg",
  "Beyond-All-Hope.jpg",
  "Black-Key.jpg",
  "Brace-of-Coneys.jpg",
  "Chieftain's-Brooch.jpg",
  "Coruhaer.jpg",
  "Cunning.jpg",
  "Daechanar's-Brand.jpg",
  "Determination.jpg",
  "Elrond's-Champion.jpg",
  "Esquire-of-Gondor.jpg",
  "Esquire-of-Rohan.jpg",
  "Forewarned.jpg",
  "Gildor-Inglorion.jpg",
  "Glamdring.jpg",
  "Gwaihir.jpg",
  "Hands-of-a-Healer.jpg",
  "Hardy.jpg",
  "Heirloom-of-Iârchon.jpg",
  "Ho-Tom-Bombadil.jpg",
  "Intimidation.jpg",
  "Iârion's-Pendant.jpg",
  "Laermuin.jpg",
  "Leader-of-Men.jpg",
  "Leaf-wrapped-Lembas.jpg",
  "Lore-of-Ancient-Arnor.jpg",
  "Lórien-Rope.jpg",
  "Mail-of-Eärnur.jpg",
  "Mendor's-Support.jpg",
  "Mendor.jpg",
  "Mithril-Shirt.jpg",
  "Mr-Underhill.jpg",
  "No-Time-to-Waste.jpg",
  "Noble-Hero.jpg",
  "Old-Bogey-stories.jpg",
  "Orders-from-Angmar.jpg",
  "Palantír-of-Orthanc.jpg",
  "Phial-of-Galadriel.jpg",
  "Raiment-of-the-Second-Age.jpg",
  "Ranger-Sense.jpg",
  "Resolute.jpg",
  "Rivendell-Skirmishers.jpg",
  "Ruthless.jpg",
  "Silverthorn.jpg",
  "Skilled-Healer.jpg",
  "Spyglass.jpg",
  "Stalwart.jpg",
  "Sting.jpg",
  "The-Fervor-of-Lore.jpg",
  "The-Might-of-Tactics.jpg",
  "The-Power-of-Spirit.jpg",
  "The-Secret-of-Leadership.jpg",
  "Three-Golden-Hairs.jpg",
  "Tireless-Ranger.jpg",
  "Valiant-Warrior.jpg",
  "Valor.jpg",
];
