import {CardHeading, CardName, CardText, CardTitle, CategoryRed, RedCard} from './styled'

export default function BenefitCardRed({benefit}) {
    return (
        <RedCard>
            <CardHeading>
                <img src={benefit.src} alt="#" />
                <CardTitle>
                    <CategoryRed>Магазинные продукты</CategoryRed>
                    <CardName>{benefit.heading}</CardName>
                </CardTitle>
            </CardHeading>
            <CardText>
                {benefit.text}
            </CardText>
        </RedCard>
    )
}