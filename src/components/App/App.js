import Form from "../Form/Form";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledHeader, StyledTitle } from "./style";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <StyledHeader>
          <StyledTitle>Add your dish</StyledTitle>
        </StyledHeader>
        <main>
          <Form />
        </main>
      </div>
    </>
  );
}

export default App;
