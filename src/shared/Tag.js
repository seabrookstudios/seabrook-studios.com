const Tag = ({ children, bgColor, borderColor }) => {
  return (
    <span
      style={{ fontSize: 10 }}
      className={`rounded border border-black p-1 mr-1 leading-sm uppercase ${bgColor} ${borderColor}`}
    >
      {children}
    </span>
  );
};
export const BaseGame = () => {
  return (
    <Tag bgColor="bg-green-100" borderColor="border-green-600">
      game
    </Tag>
  );
};
export const Digital = () => {
  return (
    <Tag bgColor="bg-orange-100" borderColor="border-orange-600">
      digital
    </Tag>
  );
};
export const Expansion = () => {
  return (
    <Tag bgColor="bg-blue-100" borderColor="border-blue-600">
      EXPANSION
    </Tag>
  );
};
export const Ios = () => {
  return (
    <Tag bgColor="bg-purple-100" borderColor="border-purple-600">
      IOS
    </Tag>
  );
};
export const Android = () => {
  return (
    <Tag bgColor="bg-yellow-100" borderColor="border-yellow-600">
      ANDROID
    </Tag>
  );
};
