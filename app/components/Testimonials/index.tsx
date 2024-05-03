"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Ирина Шенкаренко",
        profession: 'Менеджер по продажам',
        comment: 'Наш проект - это компиляция различных уже известных методик, с вкраплением уникального подхода. Основываясь на уже известных программах диагностики персонала, которые с годами  подтвердили свою эффективность, мы добавили особый подход: наши "засланные казачки" под видом реальных клиентов устраивают своего рода перформанс, смотрят на реакцию персонала, взаимодействуют с ними особенным образом и строго индивидуально, что делает диагностику эффективной. Одно дело, ответить на вопросы в тесте, понимая, зачем он проводится, а другое - абсолютно органично и без задней мысли взаимодействовать на работе с "реальным клиентом", не чувствуя подвоха.',
        imgSrc: 'assets/mentor/user2.png',
    },
    {
        name: "Анна Лунина",
        profession: 'Менеджер по продажам',
        comment: 'Мы разработали спектр услуг, подходящий именно для оценки бизнеса в сфере услуг. Помимо диагностики мы также проводим:мастер-классы по взаимодействию сотрудников друг с другом и с клиентами, тренингм по корпоративной культуре, консультации с управляющим звеном. Всё это проводится с учетом ваших индивидуальных потребностей и может стать незаменимым инструментом в построении сильного бизнеса, крепко стоящего на ногах.',
        imgSrc: 'assets/mentor/user1.png',
    },
    {
        name: "Дарья Черноусова",
        profession: 'PR-менеджер',
        comment: 'Мы изучили большое количество методик, сравнивая их и оценивая. Подобрали наиболее подходящие и адаптировали их под сферу услуг, где сотрудники напрямую контактируют с клиентами. Помимо оценки извне, о сотруднике также в формате опроса отзываются коллеги и начальство, выходит отличная всесторонняя характеристика. Получилось интересно, рекомендую попробовать!',
        imgSrc: 'assets/mentor/user3.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                <h3 className="text-4xl md:text-55xl text-center font-semibold text-black mb-3">Мнения наших специалистов</h3>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-70px]">
                                        <img src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
