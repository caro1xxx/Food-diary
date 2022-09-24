import { getCurrentDate, cacultionDate, createYear } from "../utils/date";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import PubSub from "pubsub-js";
export const Date = () => {
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 初始化当前日期
  const [date, setDate] = useState({
    year: currentDate[0],
    month: currentDate[1],
    day: currentDate[2],
  });

  // 初始化dList
  const initdList = () => {
    return new Array(cacultionDate(date.year, date.month, "day")).fill(0);
  };

  // 保存当前年份
  const currentYear = currentDate[0];
  // 选择日期的数组
  const [dList, setdList] = useState(initdList);

  // 改变日期的数组
  const changedList = (type = "day") => {
    // 获取当前日期的天数或者月数或年数
    const result = cacultionDate(date.year, date.month, type);
    // 如果获取的年
    if (type === "year") {
      setdList(createYear(currentYear));
      // 反之
    } else {
      const curMonthDay = cacultionDate(date.year, date.month, "day");
      // 判断获取到的月份的总天数是否包含了当前选择天数
      if (curMonthDay < date.day) {
        setDate({
          year: date.year,
          month: date.month,
          day: curMonthDay,
        });
      }
      // 用获取到的result生成数组
      setdList(new Array(result).fill(0));
    }
  };

  // 选择日期
  const select = (value, type) => {
    switch (type) {
      case "day":
        setDate({
          year: date.year,
          month: date.month,
          day: value,
        });
        PubSub.publish("DateChange", {
          year: date.year,
          month: date.month,
          day: value,
        });
        break;
      case "month":
        setDate({
          year: date.year,
          month: value,
          day: date.day,
        });
        PubSub.publish("DateChange", {
          year: date.year,
          month: value,
          day: date.day,
        });
        break;
      case "year":
        setDate({
          year: value,
          month: date.month,
          day: date.day,
        });
        PubSub.publish("DateChange", {
          year: value,
          month: date.month,
          day: date.day,
        });
        break;
    }
  };
  return (
    <div className="Date">
      <div className="DateTitle">
        <div
          onClick={() => {
            changedList("year");
          }}
        >
          {date.year}
        </div>
        -
        <div
          onClick={() => {
            changedList("month");
          }}
        >
          {date.month < 10 ? `0${date.month}` : date.month}
        </div>
        -
        <div
          onClick={() => {
            changedList("day");
          }}
        >
          {date.day < 10 ? `0${date.day}` : date.day}
        </div>
      </div>
      <div className="DateMain">
        {/* dList为要渲染的次数的数组 */}
        {dList.map((item, index) => {
          // 如果dList长度大于32,代表是渲染的年数,反之就是天数||月数
          return dList.length < 32 ? (
            <div className="dayMonth" key={nanoid()}>
              {/* 如果dlist长度为12说明是渲染月 */}
              {dList.length == 12 ? (
                // 如果当前渲染的月数为date内记录的那个月份,那么设置高亮
                index + 1 === date.month ? (
                  <div className="highlight">{index + 1}</div>
                ) : (
                  // 反之普通
                  <div
                    onClick={() => {
                      select(index + 1, "month");
                    }}
                  >
                    {index + 1}
                  </div>
                )
              ) : // 反之就是渲染天
              // 如果当前渲染的天数是date内记录,那么高亮
              index + 1 === date.day ? (
                <div className="highlight">{index + 1}</div>
              ) : (
                // 反之普通
                <div
                  onClick={() => {
                    select(index + 1, "day");
                  }}
                >
                  {index + 1}
                </div>
              )}
            </div>
          ) : (
            // 渲染年
            <div className="year" key={nanoid()}>
              {item === date.year ? (
                <div className="highlight">{item}</div>
              ) : (
                <div
                  onClick={() => {
                    select(item, "year");
                  }}
                >
                  {item}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
