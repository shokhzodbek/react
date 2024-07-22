import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img
          src="https://playmobile.uz/wp-content/uploads/2021/10/goodzone.jpg"
          alt=""
        />
        <div className="header-right">
          <p>Skidka</p>
          <p>Magazin</p>
        </div>
      </div>
      <div className="header-bottom">
        <button>Katolig</button>
        <div className="header-search">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="header-icon">
          <span>💥</span>
          <span>☮</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
