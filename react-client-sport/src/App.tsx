import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DynamicColumnsDemo from "./components/pages/teams/table";

 interface IRoute {
  path: string;
  key: string;
  component: any;
  label?: string;
  onlyAdmin?: boolean;
}
const routes: Array<IRoute> = [
  {
    path: "/teams",
    component: <DynamicColumnsDemo />,
    key: "teams",
    label: "teams",
  },
];
function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      {routes.map((route: IRoute) => {
        return (
          <Link key={route.label} to={route.path}>
            {route.label}{" "}
          </Link>
        );
      })}
      <Routes>
        {routes.map((route: IRoute) => {
          return (
            <Route
              path={route.path}
              key={route.key}
              element={route.component}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
