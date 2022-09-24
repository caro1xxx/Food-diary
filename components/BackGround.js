import { Disk } from "./plate";
import { Fork } from "./Fork";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
export const BackGround = () => {
  const [renderNumber, setRenderNumber] = useState({
    sumNumber: [],
  });
  useEffect(() => {
    setRenderNumber({
      sumNumber: new Array(
        Number.parseInt(
          // 获取屏幕分辨率,根据分辨率来计算渲染多少个背景svg
          (document.documentElement.clientHeight / 50) *
            (document.documentElement.clientWidth / 100)
        )
      ).fill(0),
    });
  }, []);
  return (
    <div className="BackGroundBody">
      {renderNumber.sumNumber.map((item) => {
        return (
          <div key={nanoid()} style={{ display: "inline-block" }}>
            <Disk></Disk>
            <Fork></Fork>
          </div>
        );
      })}
    </div>
  );
};
