import "./style.css";

export default function MainIntro() {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__text-block">
          <h1 className="intro__heading">
            Магазин фермерских продуктов с доставкой
          </h1>
          <p className="intro__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </div>
      </div>
    </div>
  );
}
