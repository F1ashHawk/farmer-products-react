import Button from '../../ui/button/button';
import FarmProd from '../products/farm-products';
import ShopProducts from '../products/shop-products';
import "./style.css"

export default function Benefits({benefits}) {
    return (
        <div className="benefits">
            <div className="benefits__wrapper">
                <h2 className="benefits__heading">Почему фермерские продукты лучше?</h2>
                <div className="benefits__card-list">
                    <FarmProd benefits={benefits} />
                    <ShopProducts benefits={benefits} />
                </div>
                <Button>Купить</Button>
            </div>
        </div>
    )
}