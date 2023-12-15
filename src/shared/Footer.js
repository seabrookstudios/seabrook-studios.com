import logo from "../images/icon.png";

export const Footer = () => {
  return (
    <div className="bg-gray-100 border-t border-black flex flex-col justify-center items-center text-black text-sm p-4">
      <img src={logo} alt="Seabrook Studios Logo" className="h-24 w-24 mt-4" />
      <p>© Seabrook Studios 2018-2022</p>
      <ul>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/pages/contact-us">
          Contact Us
        </a>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/policies/privacy-policy">
          Privacy Policy
        </a>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/policies/refund-policy">
          Refunds
        </a>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/policies/shipping-policy">
          Shipping
        </a>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/policies/terms-of-service">
          Terms of Service
        </a>
        <a className="px-1 underline" href="https://shop.seabrook-studios.com/pages/ccpa-opt-out">
          Do Not Sell My Data
        </a>
      </ul>
      <p className="text-xs text-gray-400">
        Apple logo is a trademark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
      </p>
    </div>
  );
};
