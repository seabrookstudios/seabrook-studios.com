import { Frame } from "../pages/Frame";
import { MoreInfo } from "../pages/Links";
import { linkStyle, paraStyle, sectionHeader } from "../styles/text";

export const SecondEditionExtraContent = () => {
  return (
    <div id="extra" className="py-4">
      <Frame>
        <h2 id="course-designer" className={`py-2 p-1 ${sectionHeader}`}>
          <a href="#course-designer" className={linkStyle}>
            Course Designer
          </a>
        </h2>
        <p className={`${paraStyle} p-1`}>
          18 Holes comes with an online course-designer allowing you to design and share your own
          creations. You can play another designer's course by using the tiles from your game or by
          printing the course out using our handy low-ink course printer.
        </p>
        <div className="py-2 px-1">
          <MoreInfo link="https://18holesgame.com/courses" label="Open Course Designer" openInNew />
        </div>
      </Frame>
    </div>
  );
};
