import React, { useState } from "react";
import "./TimeTable.css";
export const TimeTable = () => {
  // Sample class schedule data (you can replace this with actual data)
  const classSchedules = {
    1: [
      { day: "Monday", classes: ["Math", "Science", "English", "Art"] },
      {
        day: "Tuesday",
        classes: ["English", "Art", "Geography", "Music"],
      },
      {
        day: "Wednesday",
        classes: ["Math", "Science", "Physical Education", "Social Studies"],
      },
      {
        day: "Thursday",
        classes: ["English", "Art", "Geography", "Music"],
      },
      {
        day: "Friday",
        classes: ["Math", "Science", "History", "Physical Education"],
      },
    ],
    2: [
      { day: "Monday", classes: ["Math", "Science", "History", "PE"] },
      {
        day: "Tuesday",
        classes: ["English", "Art", "Geography", "Music"],
      },
      {
        day: "Wednesday",
        classes: ["Math", "Science", "Physical Education", "Social Studies"],
      },
      {
        day: "Thursday",
        classes: ["English", "Art", "Geography", "Music"],
      },
      {
        day: "Friday",
        classes: ["Math", "Science", "History", "Physical Education"],
      },
    ],
    // Add schedules for other standards here
  };

  const [selectedStandard, setSelectedStandard] = useState(1);

  const getRandomSchedules = () => {
    const schedules = classSchedules[selectedStandard];
    const randomSchedules = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * schedules.length);
      randomSchedules.push(schedules[randomIndex]);
    }
    return randomSchedules;
  };

  const handleStandardChange = (e) => {
    setSelectedStandard(parseInt(e.target.value));
  };

  const randomSchedules = getRandomSchedules();

  return (
    <div className="timetable">
      <h2>Class Schedule</h2>
      <label htmlFor="standard">Select Standard:</label>
      <select
        id="standard"
        name="standard"
        onChange={handleStandardChange}
        value={selectedStandard}
      >
        {Object.keys(classSchedules).map((standard) => (
          <option key={standard} value={standard}>
            {standard} Standard
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>8:00 - 8:45</th>
            <th>9:00 - 9:45</th>
            <th>10:00 - 10:45</th>
            <th>11:00 - 11:45</th>
          </tr>
        </thead>
        <tbody>
          {randomSchedules.map((schedule, index) => (
            <tr key={index}>
              <td>{classSchedules[1][index].day}</td>
              <td>{schedule.classes[0]}</td>
              <td>{schedule.classes[1]}</td>
              <td>{schedule.classes[2]}</td>
              <td>{schedule.classes[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
