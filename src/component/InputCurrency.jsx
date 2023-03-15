import styles from "./inputCurrency.module.css";

export default function InputCurrency(props) {
  function handleChang(event) {
    props.onInputChange(event.target.value);
  }
  function handleInputChange(event) {
    props.onInputCurrent(event.target.value);
  }

  return (
    <form>
      <select name="" id="" onChange={handleChang}>
        {/* <option value={props.value}>{props.value}</option> */}
        {props.symbols ? (
          Object.keys(props.symbols).map((key) => (
            <option key={key} value={key} selected={props.value === key}>
              {key} {props.symbols[key]}
            </option>
          ))
        ) : (
          <option value="">Loading...</option>
        )}
      </select>
      <input
        type="number"
        name=""
        id=""
        value={props.valueInput}
        onChange={handleInputChange}
      />
    </form>
  );
}
