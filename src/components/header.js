function Shapka()
{
    return(
        <header className="d-flex justify-between">
            <div className="headerLeft">
                <a href="localhost:3000">
                    <img width="60" height="60" src="/img/logo.png"/>
                </a>
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
    )
}

export default Shapka;