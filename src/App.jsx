import AppRoutes from "./routes/AppRoutes";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();
  return <AppRoutes />;
}

export default App;