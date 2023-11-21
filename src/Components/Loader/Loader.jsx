import { MoonLoader } from "react-spinners";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-div">
      <MoonLoader color="#117a7a" />
    </div>
  );
}
