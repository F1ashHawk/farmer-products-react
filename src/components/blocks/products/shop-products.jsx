import BenefitCardRed from '../../layout/benefit-card/benefit-card-red';
import "./style.css";

/**
 * @param {Array} benefits 
 */
export default function ShopProducts({benefits}) {
    const list = benefits;
    const curList = list.filter(item => item.group === 'shop');

    return (
        <ul className="benefits__list">
            {curList.map((benefit) => (
                <BenefitCardRed benefit={benefit} key={benefit.id} />
            ))}
        </ul>
    )
}