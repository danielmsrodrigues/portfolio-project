import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
