import { BaseGame, Expansion, Ios, Android } from "../shared/Tag";

export const Game = ({
  name,
  img,
  description,
  link,
  linkText,
  game,
  expansion,
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
        <div className="w-1/3">
          <img src={img} alt={`${name} box shot`} className="md:h-64 h-48 md:w-64" />
        </div>
        <div className="w-2/3 flex justify-start flex-col">
          <div className="p-3">
            <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
            <div className="flex justify-start items-center hidden md:block">
              {game && <BaseGame />}
              {expansion && <Expansion />}
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
            {moreInfoLink && (
              <a
                href={moreInfoLink}
                className="px-3 py-2 border border-gray-800 text-black text-xs font-bold uppercase rounded mr-2 hover:text-black hover:bg-pink-300"
              >
                MORE INFO
              </a>
            )}
            <a
              href={link}
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded border border-gray-800 hover:text-black hover:bg-pink-300"
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
              <span
                className="invert pl-2"
                style={{
                  content:
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
