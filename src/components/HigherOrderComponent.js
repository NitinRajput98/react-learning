// This is a higher order component which takes in resaturant card component and returns it with a label attached on top of the restaurant card

const HigherOrderComponent = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="absolute border bg-black p-2 border-transparent text-white">
          Newly Onboarded
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default HigherOrderComponent;
