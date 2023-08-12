import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import TeamPage from "./components/pages/teams";
import NotFound from "./components/pages/not-found";
import AddNewTeamPage from "./components/pages/addTeam";

console.log("test");
interface IRoute {
  path: string;
  key: string;
  component: any;
  label?: string;
}
const routes: Array<IRoute> = [
  {
    path: "/teams",
    component: <TeamPage />,
    key: "Teams",
    label: "Teams",
  },
  {
    path: "/add-Team",
    component: <AddNewTeamPage />,
    label: "Add Team",
    key: "AddTeamPage",
  },
  {
    path: "*",
    component: <NotFound />,
    key: "not found",
  },
];

function App() {
  // const navigate = useNavigate();
  // function logoutHandler() {
  //   navigate("/login");
  // }

  return (
    <div style={{ marginTop: "50px" }}>
      {routes

        .filter((r) => r.label)
        .map((route: IRoute) => {
          return (
            <Link key={route.label} to={route.path}>
              {" "}
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
