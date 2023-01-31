import pic1 from "../assets/benefits/benefit-1.svg"
import pic2 from "../assets/benefits/benefit-2.svg"
import pic3 from "../assets/benefits/benefit-3.svg"
import pic4 from "../assets/benefits/benefit-4.svg"

const benefits = [
    {
        id: 0,
        group: 'farm',
        heading: 'Еда намного вкуснее',
        text: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
        src: pic1
    },
    {
        id: 1,
        group: 'farm',
        heading: 'Натуральные продукты',
        text: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
        src: pic2
    },
    {
        id: 2,
        group: 'shop',
        heading: 'Просроченные продукты',
        text: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
        src: pic3
    },
    {
        id: 3,
        group: 'shop',
        heading: 'Некачественное мясо',
        text: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
        src: pic4
    }
]

export default benefits;