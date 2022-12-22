const Item = ({ id, content, date, time, deleteData }) => {
    
    function deleteItem(){
        deleteData(function(prev) {
            // filtered out the delete item
            return prev.filter(item => item.id !== id)
        })
    }

    return (
    <div className="item">
      <div>
        <p>{content}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default Item;
