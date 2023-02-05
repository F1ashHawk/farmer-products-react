import {Intro, IntroHeading, IntroText, IntroTextBlock, IntroWrapper} from './styled';

export default function MainIntro() {
  return (
    <Intro>
      <IntroWrapper>
        <IntroTextBlock>
          <IntroHeading>
            Магазин фермерских продуктов с доставкой
          </IntroHeading>
          <IntroText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </IntroText>
        </IntroTextBlock>
      </IntroWrapper>
    </Intro>
  );
}
