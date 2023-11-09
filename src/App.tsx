import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;
