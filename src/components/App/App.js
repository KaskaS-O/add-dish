import Form from "../Form/Form";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledApp, StyledTitle } from "./style";
import "../../styles/style.scss";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp className="App">
        <header>
          <StyledTitle>PlatePal</StyledTitle>
        </header>
        <main>
          <Form />
        </main>
      </StyledApp>
    </>
  );
}

export default App;
