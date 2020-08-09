import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import { Slider } from "./Slider";

export function App() {
  const [scale, setScale] = React.useState(0.25);
  const constraint = (480 * scale - 120) / 2;
  return (
    <Frame
      name={"SliderApp"}
      width={"100%"}
      height={"100%"}
      background={"#242424"}
    >
      <Frame
        name={"Mask"}
        size={120}
        radius={"50%"}
        center
        y={-150}
        overflow={"hidden"}
      >
        <Frame
          name={"Image"}
          size={480}
          scale={scale}
          image={"https://static.framer.com/api/bg.jpg"}
          center
          drag
          dragElastic={0}
          dragMomentum={false}
          dragConstraints={{
            top: -constraint,
            bottom: constraint,
            left: -constraint,
            right: constraint
          }}
        />
      </Frame>

      <Slider
        value={scale}
        min={0.25}
        max={0.75}
        onChange={(newValue) => {
          setScale(newValue);
        }}
      />
    </Frame>
  );
}

render(<App />, document.getElementById("root"));
