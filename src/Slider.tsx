import * as React from "react";
import { Frame, useMotionValue, useTransform } from "framer";

export function Slider({ min = 0, max = 1, value = 0, onChange }) {
  const position = useMotionValue(value * 200);
  const newValue = useTransform(position, [0, 200], [min, max]);
  return (
    <Frame
      name={"Rail"}
      height={6}
      width={200}
      radius={3}
      backgroundColor={"rgba(255, 255, 255, 0.2)"}
      center
    >
      <Frame
        name={"Fill"}
        height={6}
        backgroundColor={"rgba(255, 255, 255)"}
        radius={3}
        width={position}
      />
      <Frame
        name={"Knob"}
        size={40}
        radius={"50%"}
        backgroundColor={"rgba(255,255,255,1)"}
        center={"y"}
        shadow={"0 2px 8px 1px #242424"}
        left={-20}
        drag={"x"}
        dragConstraints={{ left: 0, right: 200 }}
        dragElastic={0}
        dragMomentum={false}
        x={position}
        onDrag={() => {
          if (onChange) onChange(newValue.get());
        }}
      />
    </Frame>
  );
}
