import { Card } from "@heroui/react";
import Image from "next/image";
import { Product } from "../../interfaces/product.interface";

export function ProductCard(product: Product) {
    return (
        <Card className="w-[320px] h-auto bg-[#EEF0F4] rounded-[24px] shadow-[9.91px_9.91px_15px_#D9DADE,-9.91px_-9.91px_15px_#FFFFFF] p-5">
            <Card.Header className="flex flex-col gap-4">
                <div className="flex justify-center items-center h-[180px] relative">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={180}
                        height={180}
                        className="object-contain w-[180px] h-[180px]"
                    />
                </div>
            </Card.Header>

            <Card.Content className="p-2 flex flex-col justify-between bg-[#EEF0F4] rounded-[5%] shadow-[inset_9.91px_9.91px_15px_#D9DADE,inset_-9.91px_-9.91px_15px_#FFFFFF]">
                <h3 className="text-gray-600 font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                    {product.description}
                </p>

                <div className="mt-5 flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-600 neumorfismo-forward px-3 py-1">
                        ${product.price}
                    </span>

                    <span className="text-sm text-gray-500 neumorfismo-forward px-3 py-1">
                        ⭐ {product.rating.rate} ({product.rating.count})
                    </span>
                </div>
            </Card.Content>
        </Card>
    );
}