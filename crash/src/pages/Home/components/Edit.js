import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [content, setContent] = useState("");
  function contentChange(e) {
    setContent(e.target.value);
  }

  const [date, setDate] = useState("");
  function dataChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  console.log(content, date, time);

  function addItem() {
    add(function (prevData) {
      return [
        {
          id: v4(),
          content,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>Notes</h1>
      <p>Content:</p>
      <input type="text" value={content} onChange={contentChange} />
      <p>Date:</p>
      <input type="date" value={date} onChange={dataChange} />
      <p>Time:</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
