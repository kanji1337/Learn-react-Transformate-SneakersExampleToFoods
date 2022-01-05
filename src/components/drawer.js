function Drawer()
{
    return(
        <div style={{display:"none"}} className="overlay">
        <div className="drawer">
          <div className="mb-20">
            <h2 className="d-flex justify-between">
              Корзина <img className="cu-p" src="/img/btn_remove.svg" alt="remove" />
            </h2>  
          </div>

          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" src="/img/foods/1.png" width={104} height={104}/>
            <div className="mr-20">
              <p className="mb-5">Биг Мак Бекон</p>
              <b>149 руб</b>
            </div>
            <img class="remove" src="/img/btn_remove.svg" alt="remove" />
          </div>
          
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" src="/img/foods/1.png" width={104} height={104}/>
            <div className="mr-20">
              <p className="mb-5">Биг Мак Бекон</p>
              <b>149 руб</b>
            </div>
            <img class="remove" src="/img/btn_remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" src="/img/foods/1.png" width={104} height={104}/>
            <div className="mr-20">
              <p className="mb-5">Биг Мак Бекон</p>
              <b>149 руб</b>
            </div>
            <img class="remove" src="/img/btn_remove.svg" alt="remove" />
          </div>

          </div>
                 

          <div className="cartTotalBlock">
            <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>298 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Доставка:</span>
                  <div></div>
                  <b>Бесплатно</b>
                </li>
            </ul>
          <button>Оформить заказ</button>
          </div>
        </div>
    </div>
    );
}
export default Drawer