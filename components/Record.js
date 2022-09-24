import RecordVegetables from "./RecordVegetables";
import RecordIrresolute from "./RecordIrresolute";
import RecordNoodle from "./RecordNoodle";
import RecordCustomizable from "./RecordMilk";

export const Record = () => {
  return (
    <div className="Main">
      <RecordVegetables></RecordVegetables>
      <RecordIrresolute></RecordIrresolute>
      <RecordNoodle></RecordNoodle>
      <RecordCustomizable></RecordCustomizable>
    </div>
  );
};
