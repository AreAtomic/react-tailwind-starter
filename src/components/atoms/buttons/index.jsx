export const ButtonPrimary = (props) => {
  return (
    <button
      className={`bg-purple-areatomic-500 text-blue-areatomic-500 min-w-button drop-shadow-sm mx-1 ${props.className}`}
      onClick={props.onClick}
      style={{height:"35px", borderRadius:"20px"}}
    >
      {props.children}
    </button>
  );
};

export const ButtonSecondary = (props) => {
  return (
    <button
      className={`bg-blue-areatomic-500 text-purple-areatomic-500 min-w-button  drop-shadow-sm mx-1 ${props.className}`}
      onClick={props.onClick}
      style={{height:"35px", borderRadius:"20px"}}
    >
      {props.children}
    </button>
  );
};
