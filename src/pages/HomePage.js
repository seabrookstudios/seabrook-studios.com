import sbs1808 from "../images/expansion-with-background.png";
import sbs1811 from "../images/18-holes-second-edition-with-background.png";
import sbs1810 from "../images/18-rolls-box-shot-with-green-background.png";
import vl from "../images/vl-box-art.png";
import diceCricket from "../images/dice-cricket-box-art.png";
import { Game } from "./Game";

const Games = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="bold text-4xl font-serif text-pink-500">Our Games</h1>
      <div className="grid grid-rows-auto grid-cols-1 mx-auto">
        <Game
          name="18 Holes"
          description="Hit off-course on purpose in this golf-themed board game for 1 to 5 players."
          img={sbs1811}
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          game
          players="1 - 5"
          age="10+"
          duration="30-45"
        />
        <Game
          name="Putting Wind &amp; Coastlines Expansion"
          img={sbs1808}
          description="Get back on course and take the competition to the greens while taming the wind and rugged coastlines in this 18 Holes expansion."
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          expansion
          players="1 - 5"
          age="10+"
          duration="+15 - 30"
        />
        <Game
          name="Course Architect"
          img={sbs1810}
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          description="Can you handle the whims of the committee and design the best golf course with what fate has given you?"
          game
          players="1 - 18"
          age="10+"
          duration="20-30"
        />
        <Game
          name="Victory Lap"
          img={vl}
          link="https://playvictorylap.com"
          linkText="Visit Page"
          description="Race with your head. Not with your thumbs. Victory Lap is a turn-based racing action emphasising tactics over twitch."
          game
          ios
          android
          players="1 - 20"
          age="10+"
          duration="20"
        />
        <Game
          name="Dice Cricket World Cup"
          img={diceCricket}
          description="Pick your squad. Push your luck. Prepare for greatness. Can you take your team to World Cup glory?"
          game
          ios
          android
          players="2"
          age="10+"
          duration="20"
        />
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
