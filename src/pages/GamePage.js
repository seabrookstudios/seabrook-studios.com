import { useParams } from "react-router-dom";
import { games } from "../data/games";
import { linkStyle, pageHeader, paraStyle } from "../styles/text";
import { CallToAction, MoreInfo } from "./Links";
import BearCarousel, { BearSlideItem } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";
import { Meta } from "./Meta";
import { RetailerInfo } from "./RetailerInfo";
import { ComponentsList } from "./ComponentsList";

const BoardGameGeekLink = ({ link }) => {
  return (
    <div className="flex justify-between flex-row pt-4">
      <div className="py-2">
        <MoreInfo link={link} label="BoardGameGeek" openInNew />
      </div>
    </div>
  );
};

export const GamePage = () => {
  let { slug } = useParams();
  const game = games.find((g) => g.slug === slug);
  if (!game) {
    return null;
  }

  const bearSlideItemData = game.images.map((image, i) => {
    return {
      key: i,
      children: <BearSlideItem imageUrl={image} />,
    };
  });

  const ExtraContent = game.ExtraContent || null;

  const parent = games.find((g) => g.sku === game.parent);

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2 w-full flex flex-col">
            <BearCarousel
              data={bearSlideItemData}
              staticHeight="200px"
              aspectRatio={{ widthRatio: 16, heightRatio: 16 }}
              isEnableLoop
              isEnableNavButton
              isEnablePagination
              autoPlayTime={5000}
              isEnableAutoPlay={true}
            />
            <div className="hidden md:block p-2">
              {game.components.length > 0 && <ComponentsList game={game} />}
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2">
            <div className="flex flex-row justify-between items-center">
              <a href="/" className={`${linkStyle} py-4 text-sm`}>
                All Products
              </a>
            </div>
            <Meta age={game.age} duration={game.duration} players={game.players} />
            <div className="flex flex-row justify-between items-end">
              <h1 className={pageHeader}>{game.name}</h1>
              <div className="py-2 w-20">
                <CallToAction link={game.ctaLink} label={game.ctaText} />
              </div>
            </div>
            {game.edition && <h2 className="text-gray-500 uppercase text-xs">{game.edition}</h2>}
            {game.blurb.map((paragraph) => {
              return (
                <p key={paragraph} className={paraStyle}>
                  {paragraph}
                </p>
              );
            })}
            <div className="flex flex-row-reverse justify-between items-end">
              {game.bggLink && <BoardGameGeekLink link={game.bggLink} />}
              {parent && (
                <MoreInfo link={parent.moreInfoLink} label="View Base Game" openInNew={false} />
              )}
            </div>
            {ExtraContent && <ExtraContent />}
            <div className="md:hidden mt-2">
              {game.components.length > 0 && <ComponentsList game={game} />}
            </div>
            <div className="mt-2">{game.availableForRetail && <RetailerInfo game={game} />}</div>
          </div>
        </div>
      </section>
    </>
  );
};
