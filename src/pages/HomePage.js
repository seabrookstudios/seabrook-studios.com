import { Game } from "./Game";
import { games } from "../data/games";
import { BoxShots } from "../images/images";

const Games = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="bold text-4xl font-serif text-pink-500">Our Games</h1>
      <div className="grid grid-rows-auto grid-cols-1 mx-auto">
        {games.map((game) => {
          return (
            <Game
              name={game.name}
              description={game.hook}
              img={BoxShots[game.sku]}
              link={game.ctaLink}
              linkText={game.ctaText}
              game={game.tags.includes("game")}
              expansion={game.tags.includes("expansion")}
              digital={game.tags.includes("digital")}
              ios={game.tags.includes("ios")}
              android={game.tags.includes("android")}
              players={game.players}
              age={game.age}
              duration={game.duration}
              moreInfoLink={game.moreInfoLink}
            />
          );
        })}
      </div>
    </section>
  );
};

const Blurb = () => {
  return (
    <p className="max-w-prose mx-auto text-lg p-8">
      We are an independent studio based in Melbourne, Australia. Our current focus is to making
      sports-themed games more accessible to everyone; not just those with great reaction skills.
    </p>
  );
};

export const HomePage = () => {
  return (
    <>
      <Blurb />
      <Games />
    </>
  );
};
