import { WeekDate } from "../components/WeekDate";
import { BackGround } from "../components/BackGround";
import { Logo } from "../components/Logo";
import { Record } from "../components/Record";
export default function Home() {
  return (
    <div>
      <div style={{ width: "800px", margin: "0px auto", marginTop: "100px" }}>
        <WeekDate></WeekDate>
        <Logo></Logo>
      </div>
      <Record></Record>
      <BackGround></BackGround>
    </div>
  );
}
