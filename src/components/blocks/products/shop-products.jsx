import BenefitCardRed from '../../layout/benefit-card/benefit-card-red';
import {BenefitsList} from './styled';

/**
 * @param {Array} benefits 
 */
export default function ShopProducts({benefits}) {
    const list = benefits;
    const curList = list.filter(item => item.group === 'shop');

    return (
        <BenefitsList>
            {curList.map((benefit) => (
                <BenefitCardRed benefit={benefit} key={benefit.id} />
            ))}
        </BenefitsList>
    )
}