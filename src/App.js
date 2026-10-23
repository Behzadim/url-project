import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>کتابخانه من </h1>
      <nav style={{ borderBottom: "1px solid ", textAlign: "center" }}>
        <Link to="/books">کتابخانه</Link>
        {"                                                        "}
        <Link to="/about">درباره ما</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
