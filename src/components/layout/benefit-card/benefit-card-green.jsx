import {CardHeading, CardName, CardText, CardTitle, CategoryGreen, GreenCard} from './styled'

export default function BenefitCardGreen({benefit}) {
    return (
        <GreenCard>
            <CardHeading>
                <img src={benefit.src} alt="#" />
                <CardTitle>
                    <CategoryGreen>Фермерские продукты</CategoryGreen>
                    <CardName>{benefit.heading}</CardName>
                </CardTitle>
            </CardHeading>
            <CardText>{benefit.text}</CardText>
        </GreenCard>
    )
}