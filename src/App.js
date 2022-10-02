import "./App.css";
// import styled from "styled-components";
import StyledButton from "./component/Button";

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

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
    </div>
  );
}

export default App;
