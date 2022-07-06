export const CallToAction = ({ link, label }) => {
  return (
    <a
      href={link}
      className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded border border-gray-800 hover:text-black hover:bg-pink-300"
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <span
        className="invert pl-2"
        style={{
          content:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)",
        }}
      />
    </a>
  );
};

export const MoreInfo = ({ link, label, openInNew, className = "" }) => {
  return (
    <a
      href={link}
      target={openInNew ? "_blank" : "_self"}
      rel="noreferrer"
      className={`px-3 py-2 border border-gray-800 text-black text-xs font-bold rounded mr-2 hover:text-black hover:bg-pink-300 ${className}`}
    >
      {label}
      {openInNew && (
        <span
          className="pl-2"
          style={{
            content:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)",
          }}
        />
      )}
    </a>
  );
};
