import Image from "next/image";
import { Inter, Oooh_Baby } from "next/font/google";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });


// export default function Home() {
//   return (
//    <>
//    <h1>Hey Ryan! This is where we will practice!</h1>
//    </>
//   );
// }

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        colors: ['bg-black', 'bg-white'],
        mapColorToImage: [
            {
                key: 'bg-black',
                value: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
            },
            {
                key: 'bg-white',
                value: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg'
            }
        ]
    },
    // More products...
]

export default function Home() {

    const [imageUrl, setImageUrl] = useState("https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg");
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={imageUrl}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    {product.colors.map((color, key) =>
                                        <button key={key} className={`mt-1 mr-2 ${color} w-2 p-2 outline`} onClick={
                                            () => {
                                                setImageUrl(products[0].mapColorToImage.filter(item => item.key = color)[0].value)
                                            }
                                        }></button>)}
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}