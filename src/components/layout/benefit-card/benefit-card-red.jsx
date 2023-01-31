import "./style.css"

export default function BenefitCardRed({benefit}) {
    return (
        <li className="benefit-card--red">
            <div className="benefit-card__heading">
                <img className="benefit-card__image" src={benefit.src} alt="#" ></img>
                <div className="benefit-card__title">
                    <span className="benefit-card__category--red">Фермерские продукты</span>
                    <h5 className="benefit-card__name">{benefit.heading}</h5>
                </div>
            </div>
            <div className="benefit-card__text">
                <p>{benefit.text}</p>
            </div>
        </li>
    )
}