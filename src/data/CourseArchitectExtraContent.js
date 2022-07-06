import { Frame } from "../pages/Frame";
import { linkStyle, paraStyle, sectionHeader } from "../styles/text";

export const CourseArchitectExtraContent = () => {
  return (
    <div id="extra" className="py-4">
      <Frame>
        <h2 id="solo-play" className={`py-2 p-1 ${sectionHeader}`}>
          <a href="#solo-play" className={linkStyle}>
            Solo Play
          </a>
        </h2>
        <p className={`${paraStyle} p-1`}>
          18 Holes: Course Archtect supports solo play through competing against your past scores or
          by benchmarking yourself against our scores. You can use the following table to see how
          you played.
        </p>
        <div>
          <p className="flex flex-row justify-between p-2">
            <span>100+</span>
            <span>Supreme Designer</span>
          </p>
          <p className="flex flex-row justify-between p-2 bg-gray-200">
            <span>90+</span>
            <span>Accomplished Designer</span>
          </p>
          <p className="flex flex-row justify-between p-2">
            <span>80+</span>
            <span>Capable Designer</span>
          </p>
          <p className="flex flex-row justify-between p-2 bg-gray-200">
            <span>72+</span>
            <span>Par Score</span>
          </p>
        </div>
      </Frame>
    </div>
  );
};
