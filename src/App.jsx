/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { OrgChartComponent } from "./OrgChart";
import "./App.css";
import dummyData from "./util/FakeData.json";

const App = (props) => {
  const [data, setData] = useState(null);
  function randomAvatarBackgroundColor() {
    const colorArr = [
      "#BA46A6",
      "#5353D1",
      "#51ABFF",
      "#1ABF96",
      "#95D162",
      "#EFC728",
      "#FF8C3A",
    ];
    const idx = Math.floor(Math.random() * 7);

    return colorArr[idx];
  }
  useEffect(() => {
    const fakeData = dummyData.map((employee) => {
      const employeeData = {
        ...employee,
        id: employee.personPositionId,
        parentId: employee.parentPersonPositionId,
        name: employee.employeeName,
        positionName: employee.positionCode,
        jobTitle: "Associate",
        avatarColor: randomAvatarBackgroundColor(),
      };
      return employeeData;
    });
    setData(fakeData);
  }, []);
  return (
    <div>
      <OrgChartComponent data={data} />
    </div>
  );
};

export default App;
