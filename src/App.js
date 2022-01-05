import Card from "./components/cards";
import Shapka from "./components/header";
import Drawer from "./components/drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Shapka/>
    
      <div className="align-center d-flex justify-between mb-0">
        <h1>Всё меню</h1>
        <div className="search-block">
          <button className="button">
            <img src="/img/search.png" width="14" height="14" alt="Search"/> 
          </button>
          <input placeholder="Поиск..."/>
        </div>
      </div>
      <div className="content p-40 d-flex">
        <Card/>
      </div>
    </div>
  );
}

export default App;
