const Validation = ({ textLength }) => (
  <div>
    {textLength > 5 ? <p>Text long enough!!</p> : <p>Text too short!!</p>}
  </div>
);

export default Validation;
