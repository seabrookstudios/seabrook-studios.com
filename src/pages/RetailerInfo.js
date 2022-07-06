import { linkStyle, sectionHeader } from "../styles/text";
import { Frame } from "./Frame";

/**
 * @param {object} props
 * @param {Game} props.game
 */
export const RetailerInfo = ({ game }) => {
  return (
    <Frame>
      <h2 id="#retailer-info" className={`${sectionHeader} p-1`}>
        <a href="#retailer-info" className={linkStyle}>
          Retailer Info
        </a>
      </h2>
      <p className="flex flex-row justify-between p-2 bg-gray-200">
        <span className="font-bold">SKU:</span>
        <span>{game.sku}</span>
      </p>
      <p className="flex flex-row justify-between p-2">
        <span className="font-bold">Barcode:</span>
        <span>{game.barcode}</span>
      </p>
      <p className="flex flex-row justify-between p-2 bg-gray-200">
        <span className="font-bold">Weight:</span>
        <span>{game.weight}g</span>
      </p>
      <p className="flex flex-row justify-between p-2">
        <span className="font-bold">Case Count:</span>
        <span>{game.caseCount}</span>
      </p>
      <p className="flex flex-row justify-between p-2 bg-gray-200">
        <span className="font-bold">Dimensions:</span>
        <span>{game.dimensions}</span>
      </p>
      <div className="flex flex-row justify-between p-2">
        <span className="font-bold">MSRP:</span>
        <ul className="list-oustide">
          <li className="text-right">${game.msrpAUD} AUD</li>
          <li className="text-right">${game.msrpUSD} USD</li>
          <li className="text-right">€{game.msrpEuro}</li>
          <li className="text-right">£{game.msrpPound}</li>
        </ul>
      </div>
    </Frame>
  );
};
