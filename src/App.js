import "./App.css";
import logo from "./logo.svg";
// import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button";
import { AnimatedLogo } from "./components/Button.styles";

// const StyledButton = styled.button`
//   border: 2px solid #4caf50;
//   background-color: #4caf50;
//   color: white;
//   padding: 15px 20px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 12px;
//   cursor: pointer;
//   transition: 0.5s all ease-out;
// `;
// Also make seprate button styled component

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        {/* as - is a polymorphic prop => pass anchor tag */}
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
