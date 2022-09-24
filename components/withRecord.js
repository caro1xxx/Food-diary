import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentDate, formatDate } from "../utils/date";
export const withRecord = (WapperComponent, type) => {
  const fromRecordwithVegetables = (prop) => {
    const select = () => {
      new Promise((resolve, reject) => {
        const formatCurrentDate = formatDate(getCurrentDate());
        // 获取本日的进食记录
        const today = JSON.parse(localStorage.getItem(formatCurrentDate));
        let obj = {};
        if (!today || today[formatCurrentDate].length === 0) {
          obj[formatCurrentDate] = [type];
          localStorage.setItem(formatCurrentDate, JSON.stringify(obj));
        } else if (today[formatCurrentDate].length < 3) {
          obj[formatCurrentDate] = [...today[formatCurrentDate], type];
          localStorage.setItem(formatCurrentDate, JSON.stringify(obj));
        }
        resolve();
      }).then((value) => {
        router.push("/summary");
      });
    };
    const router = useRouter();
    return (
      <div
        style={{ display: "inline-block" }}
        onClick={() => {
          select();
        }}
      >
        <WapperComponent {...prop} color={"#0d6efd"}></WapperComponent>
      </div>
    );
  };
  return fromRecordwithVegetables;
};
