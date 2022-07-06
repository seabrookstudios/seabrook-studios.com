export const Meta = ({ age, players, duration }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col border rounded flex-0 w-24 items-center justify-center">
        <span className="font-bold p-2 bg-pink-500 rounded-t w-24 text-center text-white">AGE</span>
        <span className="p-2">{age}</span>
      </div>
      <div className="flex flex-col border rounded flex-0 w-24 items-center justify-center">
        <span className="font-bold p-2 bg-pink-500 rounded-t w-24 text-center text-white">
          PLAYERS
        </span>
        <span className="p-2">{players}</span>
      </div>
      <div className="flex flex-col border rounded flex-0 w-24 items-center justify-center">
        <span className="font-bold p-2 bg-pink-500 rounded-t w-24 text-center text-white">
          DURATION
        </span>
        <span className="p-2">{duration}m</span>
      </div>
    </div>
  );
};
