import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Edenvale", "Boksburg", "London", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectedItems={handleSelectItem} /> */}
    </div>
  );
}

export default App;
