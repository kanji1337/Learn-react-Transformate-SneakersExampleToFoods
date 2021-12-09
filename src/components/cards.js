function Card()
{
    return(
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
    )
}

export default Card;