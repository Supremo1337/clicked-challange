import React, { useState } from "react";

interface ClickedProps {
  clientX: number;
  clientY: number;
}

export default function Home() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([]);

  function getCordanates(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }

  return (
    <div onClick={getCordanates} className="w-screen h-screen">
      {clickedPoints.map((clickedPoint, index) => {
        return (
          <div
            key={index}
            className="w-10 h-10 rounded-full bg-white absolute"
            style={{
              left: clickedPoint.clientX - 18,
              top: clickedPoint.clientY - 18,
            }}
          />
        );
      })}
    </div>
  );
}
