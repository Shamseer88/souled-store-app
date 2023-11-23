import { FaMinus, FaPlus } from "react-icons/fa6";
import "./CartAmountToggle.css";

export default function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div className="amount-toggle">
      <button onClick={() => setDecrease()}>
        <FaMinus />
      </button>
      <div className="amount-style">{amount}</div>
      <button onClick={() => setIncrease()}>
        <FaPlus />
      </button>
    </div>
  );
}
