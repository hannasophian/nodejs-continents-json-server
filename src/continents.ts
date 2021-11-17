interface Continent {
  name: string;
  area: {
    /** Number between 0-100 */
    pctOfTotal: number;
    sqKm: number;
    sqMiles: number;
  };
  highestPoint: string;
  population: {
    people: {
      count: number;
      unit?: "million" | "billion";
    };
    /** Number between 0-100 */
    pctOfTotal: number;
  };
}

export const ASIA: Continent = {
  name: "Asia",
  area: {
    sqKm: 44_614_000,
    sqMiles: 17_226_000,
    pctOfTotal: 29.8,
  },
  highestPoint: "Mount Everest",
  population: {
    people: { count: 4.6, unit: "billion" },
    pctOfTotal: 60,
  },
};

export const OCEANIA: Continent = {
  name: "Oceania",
  area: {
    sqKm: 8_510_900,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Puncak Jaya",
  population: {
    people: { count: 42, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const ANTARCTICA: Continent = {
  name: "Antarctica",
  area: {
    sqKm: 14_200_000,
    sqMiles: 5_482_650,
    pctOfTotal: 9.5,
  },
  highestPoint: "Mount Vinson",
  population: {
    people: { count: 3000, unit: undefined },
    pctOfTotal: 0,
  },
};

export const AFRICA: Continent = {
  name: "Africa",
  area: {
    sqKm: 30_370_000,
    sqMiles: 11_725_922,
    pctOfTotal: 20,
  },
  highestPoint: "Mount Kilimanjaro",
  population: {
    people: { count: 1.216, unit: "billion" },
    pctOfTotal: 16,
  },
};

export const SOUTHAMERICA: Continent = {
  name: "South America",
  area: {
    sqKm: 17_840_000,
    sqMiles: 6_888_062,
    pctOfTotal: 12,
  },
  highestPoint: "Cerro Aconcagua",
  population: {
    people: { count: 422.5, unit: "million" },
    pctOfTotal: 5.4,
  },
};
