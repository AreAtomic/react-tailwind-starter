export const ButtonPrimary = (props) => {
  return (
    <button
      className={`bg-purple-areatomic-500 text-blue-areatomic-500 min-w-button rounded drop-shadow-sm mx-1 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export const ButtonSecondary = (props) => {
  return (
    <button
      className={`bg-blue-areatomic-500 text-purple-areatomic-500 min-w-button rounded drop-shadow-sm mx-1 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
