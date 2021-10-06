function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="headerLeft">
          <img width="60" height="60" src="/img/logo.png"/>
          <div>
            <h3 className="text-uppercase">Fast food</h3>
            <p className="opacity-7">Магазин вкусной еды</p>
          </div>
        </div>
        <ul className="HeaderRight">
          <li className="mr-30">
            <img width="18" height="18" src="/img/buy.svg"/>
            <span> 0 руб.</span>
          </li>
          <li className="mr-30">
            <img width="18" height="18" src="/img/like.png"/>
          </li>
          <li className="mr-30">
            <img width="22" height="22" src="/img/users.png"/>
          </li>
        </ul>
      </header>
      <div className="content p-40 d-flex">
        <div className="card">
          <img src="/img/foods/1.png" width={200} height={180}></img>
          <h5>Биг Мак Бекон</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>149 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png"/>
            </button>
            </div>
        </div>

        <div className="card">
          <img src="/img/foods/2.png" width={200} height={180}></img>
          <h5>Чикен Панини Тоскана</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>179 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png"/>
            </button>
            </div>
        </div>

        <div className="card">
          <img src="/img/foods/3.png" width={200} height={180}></img>
          <h5>Яичница с сыром</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>129 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png"/>
            </button>
            </div>
        </div>

        <div className="card">
          <img src="/img/foods/4.png" width={200} height={180}></img>
          <h5>Омлет с ветчиной</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>129 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png"/>
            </button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
