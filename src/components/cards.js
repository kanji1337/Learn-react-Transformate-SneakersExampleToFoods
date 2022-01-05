function Card()
{
    return(
      <><div className="card">
        <div className="favorite">
          <img src="/img/heart_like.svg" alt="Like" />
        </div>
        <img src="/img/foods/1.png" width={200} height={180}></img>
        <h5>Биг Мак Бекон</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>149 руб</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" />
          </button>
        </div>
      </div><div className="card">
          <div className="favorite">
            <img src="/img/heart_like.svg" alt="Like" />
          </div>
          <img src="/img/foods/2.png" width={200} height={180}></img>
          <h5>Чикен Панини Тоскана</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>179 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" />
            </button>
          </div>
        </div><div className="card">
          <div className="favorite">
            <img src="/img/heart_like.svg" alt="Like" />
          </div>
          <img src="/img/foods/3.png" width={200} height={180}></img>
          <h5>Яичница с сыром</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>129 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" />
            </button>
          </div>
        </div><div className="card">
          <div className="favorite">
            <img src="/img/heart_like.svg" alt="Like" />
          </div>
          <img src="/img/foods/4.png" width={200} height={180}></img>
          <h5>Омлет с ветчиной</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>129 руб</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.png" />
            </button>
          </div>
        </div></>
    )
}

export default Card;