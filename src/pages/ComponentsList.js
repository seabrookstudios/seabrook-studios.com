import { linkStyle, sectionHeader } from "../styles/text";
import { MoreInfo } from "./Links";
import { Frame } from "./Frame";

/**
 * @param {object} props
 * @param {Game} props.game
 */
export const ComponentsList = ({ game }) => {
  return (
    <Frame>
      <div id="components" className="drop-shadow-none p-1">
        <h2 className={sectionHeader}>
          <a href="#components" className={linkStyle}>
            Components
          </a>
        </h2>
        <ul className="list-disc list-inside px-2">
          {game.components.map(({ name, link }) => {
            return (
              <li key={name} className="items-center">
                {name}
                {link && (
                  <MoreInfo label="GET" link={link} openInNew={true} className="px-1 py-1 ml-1" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Frame>
  );
};
