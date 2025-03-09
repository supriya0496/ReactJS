import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const handleClicked = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-6/12 p-4 mx-auto my-4 shadow-lg bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClicked}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
