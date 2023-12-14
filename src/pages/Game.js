import { BaseGame, Expansion, Ios, Android, Digital } from "../shared/Tag";
import { sectionHeader } from "../styles/text";
import { CallToAction, MoreInfo } from "./Links";

export const LandscapeGame = ({
  name,
  img,
  description,
  link,
  linkText,
  game,
  expansion,
  digital,
  ios,
  android,
  players,
  age,
  duration,
  moreInfoLink,
}) => {
  return (
    <div className="py-6 px-1 max-h-80">
      <div className="flex max-w-3xl bg-white shadow-lg rounded-lg h-full">
        <a className="w-1/3" href={moreInfoLink}>
          <img src={img} alt={`${name} box shot`} className="md:h-64 h-48 md:w-64" />
        </a>
        <div className="w-2/3 flex justify-start flex-col">
          <div className="p-3">
            <h1 className={sectionHeader}>{name}</h1>
            <div className="flex justify-start items-center hidden md:block">
              {game && <BaseGame />}
              {expansion && <Expansion />}
              {digital && <Digital />}
              {ios && <Ios />}
              {android && <Android />}
            </div>
            <p className="pt-2 text-gray-600 text-sm">{description}</p>
            <div className="grid grid-cols-2 pt-4 pb-2 hidden md:grid">
              <p className="text-sm">Players</p>
              <p className="text-sm">{players}</p>
              <p className="text-sm">Ages</p>
              <p className="text-sm">{age}</p>
              <p className="text-sm">Playing Time</p>
              <p className="text-sm">{duration} minutes</p>
            </div>
          </div>
          <div className="flex item-center justify-end pr-3">
            {moreInfoLink && <MoreInfo openInNew={false} link={moreInfoLink} label="MORE INFO" />}
            {link && <CallToAction link={link} label={linkText} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortraitGame = ({
  name,
  img,
  description,
  link,
  linkText,
  game,
  expansion,
  digital,
  ios,
  android,
  players,
  age,
  duration,
}) => {
  return (
    <div className="py-2 px-2 flex md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="bg-white shadow-lg rounded-lg h-full p">
        <a className="" href={link}>
          <img src={img} alt={`${name} box shot`} className="" />
        </a>
        <div className="flex justify-start flex-col">
          <div className="p-3">
            <h1 className={sectionHeader}>{name}</h1>
            <div className="flex justify-start items-center hidden md:block">
              {game && <BaseGame />}
              {expansion && <Expansion />}
              {digital && <Digital />}
              {ios && <Ios />}
              {android && <Android />}
            </div>
            <p className="pt-2 text-gray-600 text-sm h-16">{description}</p>
            <div className="grid grid-cols-2 pt-4 pb-2 hidden md:grid">
              <p className="text-sm">Players</p>
              <p className="text-sm">{players}</p>
              <p className="text-sm">Ages</p>
              <p className="text-sm">{age}</p>
              <p className="text-sm">Playing Time</p>
              <p className="text-sm">{duration} minutes</p>
            </div>
          </div>
          <div className="flex item-center justify-end pr-3 pb-2">
            {/* {moreInfoLink && <MoreInfo openInNew={false} link={moreInfoLink} label="MORE INFO" />} */}
            {link && <CallToAction link={link} label={linkText} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Game = PortraitGame;
