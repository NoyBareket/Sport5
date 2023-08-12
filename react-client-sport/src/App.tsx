import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import TeamPage from "./components/pages/teams";
import NotFound from "./components/pages/not-found";
import AddNewTeamPage from "./components/pages/addTeam";
import GamesPage from "./components/pages/games";
import AddNewGamePage from "./components/pages/addGame";

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
    path: "/games",
    component: <GamesPage />,
    key: "Games",
    label: "Games",
  },
  {
    path: "/add-Game",
    component: <AddNewGamePage />,
    label: "Add Game",
    key: "AddGamePage",
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
    <div style={{ display: "flax", marginTop: "50px", padding: "20px" }}>
      <div style={{ width: "800px" }}>
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
      </div>

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
