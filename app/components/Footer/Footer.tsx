import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: 'assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: 'assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: 'assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
    }
    ,
    {
        id: 3,
        section: "More",
        link: ['Airline fees', 'Airlines', 'Low fare tips', 'Badges &', 'Certificates']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="assets/logo/logo.svg" alt="logo" width={214} height={66} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> Получите КП оствив заявку на сайте. <br /> Мы свяжемся с вами в ближайшее время.</h3>
                    <div className='flex gap-4'>

                    

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2023.КОП. Все права защищены.</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                </div>
            </div>
        </div>
    )
}

export default footer;
