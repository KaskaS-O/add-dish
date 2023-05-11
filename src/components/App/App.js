import Form from "../Form/Form";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledApp, StyledHeader, StyledTitle } from "./style";
import "../../styles/style.scss";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp className="App">
        <StyledHeader>
          <StyledTitle>PlatePal</StyledTitle>
        </StyledHeader>
        <main>
          <Form />
        </main>
      </StyledApp>
    </>
  );
}

export default App;
