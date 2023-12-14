import { BoxShots } from "../images/images";
import { CourseArchitectExtraContent } from "./CourseArchitectExtraContent";
import { SecondEditionExtraContent } from "./SecondEditionExtraContent";
/**
 * @type {Game[]}
 */
export const games = [
  {
    slug: "18-holes",
    name: "18 Holes",
    edition: "Second Edition",
    sku: "SBS1811",
    hook: "Hit off-course on purpose in this golf-themed board game for 1 to 5 players.",
    ctaLink: "https://shop.seabrook-studios.com/products/18-holes",
    ctaText: "Buy",
    tags: ["game"],
    players: "1 - 5",
    age: "10+",
    duration: "30 - 45",
    designer: "Ryan Boucher",
    artist: "Josh Sacco",
    bggLink: "https://boardgamegeek.com/boardgame/274234/18-holes",
    blurb: [
      `A beautiful drive down the fairway is a satisfying feeling. And yet, beyond the trees, you 
      spy an alternative. A short-cut to the green. Do you take the chance? Hit off-course on 
      purpose in this golf-themed board game for 1 to 5 players. With some clever thinking, you'll 
      be able to turn bad luck into the perfect shot. `,
      `In 18 Holes, you'll design and build the course, you'll draft for clubs and you'll compete 
      to win each hole. Every hole is an opportunity to outplay your opponents and reach the green 
      first.`,
      `Every game of 18 Holes plays on a new course. Be random, design it together or go online to 
      the 18 Holes Clubhouse and play a course created by another player. With 49 different 
      double-sided tiles, course-adjustment tiles and 12 different game modes (including multiple solo 
        and two player). 18 Holes lets you tailor the playing experience to suit your crowd.`,
    ],
    images: [BoxShots.SBS1811],
    availableForRetail: true,
    components: [
      { name: "49 large double-sided course tiles" },
      { name: "21 double-sided hazard adjustment tiles" },
      { name: "5 golfer meeples" },
      { name: "8 unique golfer personas" },
      { name: "34 club cards (63x88mm)" },
      { name: "74 shot cards (63x88mm)" },
      { name: "24 solo chaos golf cards (63x88mm)" },
      { name: "18 1-point tokens" },
      { name: "18 2-point tokens" },
      { name: "18 5-point tokens" },
      { name: "20 hole-in-one-tokens" },
      { name: "Solo turn marker" },
      {
        name: "32 page rule book",
        link: "https://drive.google.com/drive/u/1/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI",
      },
      { name: "18 3d flags" },
      { name: "21 3d trees" },
      { name: "1 box" },
    ],
    barcode: "9 369999 089979",
    weight: 1973,
    caseCount: 6,
    dimensions: "295x295x65mm",
    msrpAUD: 90,
    msrpEuro: 54.99,
    msrpUSD: 59.99,
    msrpPound: 49.99,
    moreInfoLink: "/games/18-holes",
    ExtraContent: SecondEditionExtraContent,
    year: "2020",
  },
  {
    slug: "18-holes-putting-wind-coastlines",
    name: "Putting, Wind & Coastlines",
    parent: "SBS1811",
    edition: "EXPANSION",
    sku: "SBS1808",
    hook: "Get back on course and take the competition to the greens while taming the wind and rugged coastlines in this 18 Holes expansion.",
    ctaLink: "https://shop.seabrook-studios.com/products/18-holes-greens-wind-and-coastline-expansion",
    ctaText: "Buy",
    tags: ["expansion"],
    players: "1 - 5",
    age: "10+",
    duration: "+15 - 30",
    designer: "Ryan Boucher",
    artist: "Josh Sacco",
    bggLink: "https://boardgamegeek.com/boardgameexpansion/347085/18-holes-putting-wind-and-coastlines",
    blurb: [
      `Tame the wind, play along rugged coastlines and take the competition all the way to 
    the green in this expansion for 18 Holes.`,
      `In Reading the Greens, players now need to consider 
    their approach to the green to ensure they have the easiest putt. A Green deck is added to keep 
    the challenge fresh for every hole. Includes new golfers, new clubs, player actions and once on
     the green, custom dice are used to sink the putt.`,
      `In Taming the Wind players can choose how
      they will work with the wind, allowing for shots that were not possible before.`,
      `The 
      Coastline pack includes new double-sided course tiles that bring the beautiful coastlines, 
      precarious greens and new hazards.`,

      `This expansion is compatible with both the first and second edition of 18 Holes.`,
    ],
    images: [BoxShots.SBS1808],
    availableForRetail: true,
    components: [
      { name: "36 Green cards (63x88mm)" },
      { name: "35 putting dice (16mm)" },
      { name: "22 wind cards (63x88mm)" },
      { name: "14 large double-sided course tiles" },
      { name: "10 putt action cards (63x88mm)" },
      { name: "5 club cards (63x88mm)" },
      { name: "2 golfer cards (63x88mm)" },
      { name: "1 large double-sided wind tile" },
      { name: "1 putting award card (63x88mm)" },
      {
        name: "Rulebook",
        link: "https://drive.google.com/drive/u/1/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI",
      },
    ],
    barcode: "9 369999 615970",
    caseCount: 10,
    dimensions: "207x202x50",
    weight: 685,
    moreInfoLink: "/expansions/18-holes-putting-wind-coastlines",
    msrpAUD: 50,
    msrpEuro: 29.99,
    msrpUSD: 34.99,
    msrpPound: 24.99,
    year: "2022",
  },
  {
    slug: "course-architect",
    name: "Course Architect",
    sku: "SBS1810",
    hook: "Can you handle the whims of the committee and design the best golf course with what fate has given you?",
    ctaLink: "https://shop.seabrook-studios.com/products/18-holes-course-architect",
    ctaText: "Buy",
    tags: ["game"],
    players: "1 - 18",
    age: "10+",
    duration: "20 - 30",
    moreInfoLink: "/games/course-architect",
    designer: "Ryan Boucher",
    artist: "Josh Sacco",
    bggLink: "https://boardgamegeek.com/boardgame/347107/18-holes-course-architect",
    blurb: [
      `There is an adage, the million-dollar deal is done on the golf course. The deals
      shouldn't be happening yet as your still designing the course now. Yet, every week,
      the planning committee arrive to tell you what deals they made over the weekend and
      now you have to adjust your plans to suit. Can you handle the whims of the committee
      and design the best golf course.`,
      `18 Holes: Course Architect is a roll-and-write where you compete to create a golf
      course while satisfying the whims of the Course Planning Committee. Each round the
      committee dice are rolled revealing the greens, fairways and hazards that need to be
      placed this round. All players place what is shown on the dice onto their course.
      Player's score points for holes of the correct length, well placed hazards, secret
      bonuses and linking their holes together. The player with the most points will be
      regarded the greatest course architect!`,
    ],
    images: [BoxShots.SBS1810],
    availableForRetail: true,
    barcode: "9 369999 325480",
    msrpAUD: 40,
    msrpEuro: 24.99,
    msrpPound: 19.99,
    msrpUSD: 29.99,
    caseCount: 10,
    dimensions: "135x185x45mm",
    weight: 500,
    components: [
      {
        name: "100 course plans",
        link: "https://drive.google.com/drive/u/1/folders/1hhkU5Qa15UBFpZmH7U8EsFadbc2nIf07",
      },
      { name: "36 double-sided prime location cards (63x88mm)" },
      { name: "36 committee bonus cards (63x88mm)" },
      { name: "18 designer choice cards (63x88mm)" },
      { name: "6 reference cards (63x88mm)" },
      { name: "3 dice (25mm)" },
      {
        name: "Rulebook",
        link: "https://drive.google.com/drive/u/1/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI",
      },
    ],
    ExtraContent: CourseArchitectExtraContent,
    year: "2022",
  },
  {
    slug: "ten-wickets",
    name: "Ten Wickets",
    sku: "SBSCR01",
    hook: "Win auctions, take wickets. Lose auctions, score runs.",
    ctaLink: "https://shop.seabrook-studios.com/products/ten-wickets",
    ctaText: "Buy",
    tags: ["game"],
    players: "1 - 2",
    age: "8+",
    duration: "20",
    moreInfoLink: "/games/ten-wickets",
    designer: "Ryan Boucher",
    artist: "Pepalworks",
    bggLink: "https://boardgamegeek.com/boardgame/378349/ten-wickets",
    blurb: [
      `Ten Wickets is a two-player cricket game. Each wicket in Ten Wickets is an auction, where, whenever you win that auction, your opponent scores your winning bid while losing an end game bonus. This immediate gain and long term loss keeps the tension in the game until the last wicket falls. The game ends when one player takes Ten Wickets and the player with the highest score wins.`,
      `A fantastic piece of game design" - Tom Moore (Nerds of the West)`,
      `You play the role of a team captain trying to coax your opponent into giving up wickets cheaply or manoeuvring them into a situation where they have to. You'll do this through clever bidding and hand management.`,
      `Successfully funded on Kickstarter in mid-2023. Ten Wickets is in stock`,
    ],
    images: [BoxShots.SBSCR01],
    availableForRetail: true,
    barcode: "9 369998 168057",
    msrpAUD: 29.95,
    msrpEuro: 19.99,
    msrpPound: 14.99,
    msrpUSD: 19.99,
    caseCount: 12,
    dimensions: "135x185x45mm",
    weight: 450,
    components: [
      {
        name: "50 double-sided score sheets",
        link: "https://drive.google.com/drive/u/1/folders/1hhkU5Qa15UBFpZmH7U8EsFadbc2nIf07",
      },
      { name: "55 run cards cards (63x88mm)" },
      { name: "29 wicket cards (70x120mm)" },
      { name: "6 good ball tokens (63x88mm)" },
      {
        name: "Rulebook",
        link: "https://drive.google.com/drive/u/1/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI",
      },
    ],
    year: "2023",
  },
  {
    slug: "victory-lap",
    name: "Victory Lap",
    sku: "VLAPP01",
    hook: "Race with your head. Not with your thumbs. Victory Lap is a turn-based racing action emphasising tactics over twitch.",
    ctaLink: "https://playvictorylap.com",
    ctaText: "Learn More",
    tags: ["digital", "ios", "android"],
    players: "1 - 20",
    age: "10+",
    duration: "20",
    designer: "Ryan Boucher",
    blurb: [],
    images: [BoxShots.VLAPP01],
    availableForRetail: false,
    components: [],
    year: "2018-",
  },
];
