import Button from '../../ui/button/button';
import FarmProd from '../products/farm-products';
import ShopProducts from '../products/shop-products';
import {BenefitsWrapper, CardList} from './styled';

export default function Benefits({benefits}) {
  return (
    <BenefitsWrapper>
      <h2>Почему фермерские продукты лучше?</h2>
      <CardList>
        <FarmProd benefits={benefits} />
        <ShopProducts benefits={benefits} />
      </CardList>
      <Button>Купить</Button>
    </BenefitsWrapper>
  )
}