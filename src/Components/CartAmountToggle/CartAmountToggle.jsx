import { FaMinus, FaPlus } from "react-icons/fa6";
import "./CartAmountToggle.css";

export default function CartAmountToggle({
  amount,
  setDecrease,
  setIncrease,
  id,
}) {
  return (
    <div className="amount-toggle">
      <button onClick={() => setDecrease(id)}>
        <FaMinus />
      </button>
      <div className="amount-style">{amount}</div>
      <button onClick={() => setIncrease(id)}>
        <FaPlus />
      </button>
    </div>
  );
}
