import './App.css';
import Container from "./Container"
import { ColorProvider } from "./context/Context"

function App() {

  return (
    <ColorProvider>
      <Container />
    </ColorProvider>
  );
}

export default App;
