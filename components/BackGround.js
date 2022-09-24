import { Disk } from "./plate";
import { Fork } from "./Fork";
import { nanoid } from "nanoid";
export const BackGround = () => {
  let count = new Array(210);
  count.fill(210);
  return (
    <div className="BackGroundBody">
      {count.map((item) => {
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
