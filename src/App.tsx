import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Container>
        <Header />
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
