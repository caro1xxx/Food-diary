import { withRecord } from "./withRecord";
import { useState } from "react";
const RecordCustomizable = (prop) => {
  return (
    <div style={{ backgroundColor: prop.color }} className="recordType">
      <svg
        t="1663770661548"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="22099"
        width="100"
        height="100"
      >
        <path
          d="M178.666 428.667c-46.021 0-83.333 37.313-83.333 83.333 0 46.02 37.313 83.333 83.333 83.333S262 558.02 262 512c0-46.021-37.313-83.333-83.334-83.333z m333.334 0c-46.021 0-83.334 37.313-83.334 83.333 0 46.02 37.313 83.333 83.334 83.333 46.02 0 83.333-37.313 83.333-83.333 0-46.021-37.313-83.333-83.333-83.333z m333.333 0C799.313 428.667 762 465.979 762 512c0 46.02 37.313 83.333 83.333 83.333S928.666 558.02 928.666 512c0-46.021-37.312-83.333-83.333-83.333z"
          p-id="22100"
        ></path>
      </svg>
    </div>
  );
};

export default withRecord(RecordCustomizable, "customizable");