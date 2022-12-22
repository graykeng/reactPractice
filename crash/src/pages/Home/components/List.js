import Item from "./Item";

const List = ({ listData, deleteData }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { content, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            content={content}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
