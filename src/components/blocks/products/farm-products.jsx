import BenefitCardGreen from '../../layout/benefit-card/benefit-card-green';
import {BenefitsList} from './styled';

/**
 * @param {Array} benefits 
 */
export default function FarmProducts({benefits}) {
    const list = benefits;
    const curList = list.filter(item => item.group === 'farm');

    return (
        <BenefitsList>
            {curList.map((benefit) => (
                <BenefitCardGreen benefit={benefit} key={benefit.id} />
            ))}
        </BenefitsList>
    )
}