import { WeekDate } from "../components/WeekDate";
import { BackGround } from "../components/BackGround";
import { Logo } from "../components/Logo";
import { Date } from "../components/Date";
import { Chart } from "../components/Chart";
export default function Home() {
  return (
    <div>
      <div style={{ width: "800px", margin: "0px auto", marginTop: "100px" }}>
        <WeekDate></WeekDate>
        <Logo></Logo>
      </div>
      <div className="Main">
        <Date></Date>
        <Chart></Chart>
      </div>
      <BackGround></BackGround>
    </div>
  );
}
