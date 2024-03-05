import { burdens } from "./data/burdens";
import { scenarios } from "./data/scenarios";
import { Hero, Scenario, changedAttrs, changedAttrsScenario } from "./types";

export function filterHeroes(obj: changedAttrs, allHeroes: Hero[]) {
  const { alive, current } = obj;
  const her = allHeroes.filter(
    (hero) => hero.alive === alive && hero.current === current
  );
  return her;
}

export function filterScenarios(
  obj: changedAttrsScenario,
  scenarios: Scenario[]
) {
  const { won, current } = obj;
  const scen = scenarios.filter(
    (scenario) => scenario.won === won && scenario.current === current
  );
  return scen;
}

export function doesHaveImage(borb: string) {
  const imageNames =
    "src/images/bb/Amarthiúl's-Courage.jpg src/images/bb/Andúril.jpg src/images/bb/Appointed-by-Fate.jpg src/images/bb/Armor-Plating.jpg src/images/bb/Army-of-the-Dead-Objective-Ally.jpg src/images/bb/Ballista.jpg src/images/bb/Berelind.jpg src/images/bb/Beyond-All-Hope.jpg src/images/bb/Black-Key.jpg src/images/bb/Brace-of-Coneys.jpg src/images/bb/Chieftain's-Brooch.jpg src/images/bb/Coruhaer.jpg src/images/bb/Cunning.jpg src/images/bb/Daechanar's-Brand.jpg src/images/bb/Determination.jpg src/images/bb/Elrond's-Champion.jpg src/images/bb/Esquire-of-Gondor.jpg src/images/bb/Esquire-of-Rohan.jpg src/images/bb/Forewarned.jpg src/images/bb/Gildor-Inglorion.jpg src/images/bb/Glamdring.jpg src/images/bb/Gwaihir.jpg src/images/bb/Hands-of-a-Healer.jpg src/images/bb/Hardy.jpg src/images/bb/Heirloom-of-Iârchon.jpg src/images/bb/Ho-Tom-Bombadil.jpg src/images/bb/Iârion's-Pendant.jpg src/images/bb/Intimidation.jpg src/images/bb/Laermuin.jpg src/images/bb/Leader-of-Men.jpg src/images/bb/Leaf-wrapped-Lembas.jpg src/images/bb/Lore-of-Ancient-Arnor.jpg src/images/bb/Lórien-Rope.jpg src/images/bb/Mail-of-Eärnur.jpg src/images/bb/Mendor.jpg src/images/bb/Mendor's-Support.jpg src/images/bb/Mithril-Shirt.jpg src/images/bb/Mr-Underhill.jpg src/images/bb/No-Time-to-Waste.jpg src/images/bb/Noble-Hero.jpg src/images/bb/Old-Bogey-stories.jpg src/images/bb/Orders-from-Angmar.jpg src/images/bb/Palantír-of-Orthanc.jpg src/images/bb/Phial-of-Galadriel.jpg src/images/bb/Raiment-of-the-Second-Age - kopie.jpg src/images/bb/Raiment-of-the-Second-Age.jpg src/images/bb/Ranger-Sense.jpg src/images/bb/Resolute.jpg src/images/bb/Rivendell-Skirmishers.jpg src/images/bb/Ruthless.jpg src/images/bb/Silverthorn.jpg src/images/bb/Skilled-Healer.jpg src/images/bb/Spyglass.jpg src/images/bb/Stalwart.jpg src/images/bb/Sting.jpg src/images/bb/The-Fervor-of-Lore.jpg src/images/bb/The-Might-of-Tactics.jpg src/images/bb/The-Power-of-Spirit - kopie.jpg src/images/bb/The-Power-of-Spirit.jpg src/images/bb/The-Secret-of-Leadership - kopie.jpg src/images/bb/The-Secret-of-Leadership.jpg src/images/bb/Three-Golden-Hairs - kopie.jpg src/images/bb/Three-Golden-Hairs.jpg src/images/bb/Tireless-Ranger.jpg src/images/bb/Valiant-Warrior.jpg src/images/bb/Valor.jpg";
  return imageNames.includes("/" + borb);
}

export function doesBurdenHaveImage(br: string) {
  return burdens.includes(br);
}

const scenarioNames = scenarios.map((scens) => scens.name.toLowerCase());
export function doesScenarioHaveImage(sc: string) {
  return scenarioNames.includes(sc);
}

export function sortArray(arr: Hero[]) {
  arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return arr;
}

export function adjustMotk(arr) {
  arr.map((hero) => {
    if (hero.name.startsWith("(")) {
      hero.name = hero.name.replace("(MotK)", "");
      hero.name = hero.name + " (MotK)";
      return hero;
    } else {
      return hero;
    }
  });
  return arr;
}

export function sortedItems(arr, sign) {
  arr.sort(function (a, b) {
    const aBusy = a.name.includes(sign);
    const bBusy = b.name.includes(sign);
    if (aBusy && !bBusy) {
      return 1;
    }
    if (!aBusy && bBusy) {
      return -1;
    }
    return a.name.localeCompare(b.name);
  });
  return arr;
}
