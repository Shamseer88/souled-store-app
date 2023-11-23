import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Provider/UserProvider.jsx";
import { AppProvider } from "./Provider/ProductContext.jsx";
import { FilterContextProvider } from "./Provider/filter_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <AppProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </AppProvider>
    </UserProvider>
  </BrowserRouter>
);
