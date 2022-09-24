import PubSub from "pubsub-js";
import { useState, useEffect } from "react";
import { getCurrentDate, formatDate } from "../utils/date";
import * as echarts from "echarts";
export const Chart = () => {
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 格式化今天时间
  const formatCurrentDate = formatDate(currentDate);
  // 时间
  const [date, setDate] = useState({
    year: currentDate[0],
    month: currentDate[1],
    day: currentDate[2],
  });
  // 食物
  const [food, setFood] = useState({
    noodle: 0,
    irresolute: 0,
    vegetables: 0,
  });

  let token = PubSub.subscribe("DateChange", (msg, value) => {
    setDate({
      year: value.year,
      month: value.month,
      day: value.day,
    });
    return function () {
      PubSub.unsubscribe(token); // 取消订阅消息
    };
  });

  const echartInit = () => {
    var myChart = echarts.init(document.getElementById("chart"));
    // 指定图表的配置项和数据
    var option = {
      series: [
        {
          type: "pie",
          data: [
            { name: "noodle", value: food.noodle },
            { name: "irresolute", value: food.irresolute },
            { name: "vegetables", value: food.vegetables },
          ],
          // 半径
          // radius:10,
          // radius:['50%','25%'],//实现圆环效果(空心圆),第一个数为外圆半径，第二个数为内圆半径
          // 南丁格尔图
          roseType: "radius", //根据数组来显示每一区域的半径，而不是一个正圆
          // selectedMode: "single", //选中效果  可选值:multiple:多选效果
          selectedOffset: 30, //选中效果偏移量
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    if (localStorage.getItem(formatCurrentDate)) {
      const value = JSON.parse(localStorage.getItem(formatCurrentDate));
      const valueFalt = [...value[formatCurrentDate]];
      // reduce统计每种食物出现次数
      const result = valueFalt.reduce((prev, curr) => {
        if (curr in prev) {
          prev[curr]++;
        } else {
          prev[curr] = 1;
        }
        return prev;
      }, {});
      setFood({
        noodle: result.noodle || 0,
        irresolute: result.irresolute || 0,
        vegetables: result.vegetables || 0,
      });
    }
  }, []);

  useEffect(() => {
    echartInit();
  }, [food]);

  return (
    <div style={{ width: "55%", height: "360px", padding: "20px" }}>
      <div id="chart" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};
