import "./Famous.css";

function Card1({ gap }) {
  return (
    <>
      <div className="card-famous" style={{ gridColumn: gap }}>
        <div className="card-left">
          <h1>Смартфоны и гаджеты</h1>
          <dir>
            <span>Смартфоны</span>
            <span>Телефоны</span>
          </dir>
        </div>
        <img
          src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-card-1.483e4807.png&w=256&q=75"
          alt=""
        />
      </div>
    </>
  );
}

function Famous() {
  return (
    <div className="famous">
      <Card1 gap={"1/3"} />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 gap={"3/5"} />
    </div>
  );
}

export default Famous;
