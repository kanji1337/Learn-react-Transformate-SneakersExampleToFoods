function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

          <div className="cartItem d-flex align-center">
            <img className="mr-20" src="/img/foods/1.png" width={104} height={104}/>
            <div className="mr-20">
              <p className="mb-5">Биг Мак Бекон</p>
              <b>149 руб</b>
            </div>
            <img class="remove" src="/img/btn_remove.svg" alt="remove" />
          </div>
        </div>
      </div>

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

        <div className="card">
          <div className="favorite">
            <img src="/img/heart_like.svg" alt="Like"/>
          </div>
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
