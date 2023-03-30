import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />

        <MyFooter bottone="info" />
      </Container>

      <AllBooks />
    </>
  );
}

export default App;
