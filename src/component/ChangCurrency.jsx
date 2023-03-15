import styles from "./changCurrency.module.css";

export default function ChangCurrency(props) {
  const { onSwitch, symbol, symbolBase, latest } = props;
  const handleClick = () => {
    onSwitch();
  };
  return (
    <div className={styles.box}>
      <button onClick={handleClick}>สลับ</button>
      <span>
        {1} {symbolBase} = {1 * latest} {symbol}
      </span>
    </div>
  );
}
