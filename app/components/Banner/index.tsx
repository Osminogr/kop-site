import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-lightkblue'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <img src="assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Снижение негативных отзывов и потери клиентов на 30%*</h3>
                        </div>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Комплексная оценка работы персонала для улучшения клиентского сервиса</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Мы проверим работу сотрудника в реальных условиях, проанализируем его поведение и сформируем полную аналитику с рекомендациями.</h3>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <img src="assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Персональный подход</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Проверка на рабочем месте</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src="assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Удобный доступ к отчетам</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <img src="assets/banner/mahila.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
