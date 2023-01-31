import BenefitCardGreen from '../../layout/benefit-card/benefit-card-green';

/**
 * @param {Array} benefits 
 */
export default function FarmProducts({benefits}) {
    const list = benefits;
    const curList = list.filter(item => item.group === 'farm');

    return (
        <ul className="benefits__list">
            {curList.map((benefit) => (
                <BenefitCardGreen benefit={benefit} key={benefit.id} />
            ))}
        </ul>
    )
}