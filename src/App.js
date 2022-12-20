import "./App.css";
import React, { Fragment } from "react";
import { Title, Wrapper, Button, TomatoButton, Rotate } from "./sytled";

function App() {
  return (
    <Fragment>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <div>
        <Button>Normal Button</Button>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="#">
          Link with Tomato Button styles
        </TomatoButton>
      </div>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </Fragment>
  );
}
export default App;
