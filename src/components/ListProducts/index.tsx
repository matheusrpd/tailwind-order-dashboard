import { ReactComponent as BoxIcon } from "../../assets/icons/box.svg";
import { ReactComponent as TShirtIcon } from "../../assets/icons/t-shirt.svg";

type Product = {
  name: string,
  imgUrl: string,
  status: string,
  color: string,
  category: string,
}

type ListProductsProps = {
  products: Product[];
}

export function ListProducts({ products }: ListProductsProps) {
  return (
    <>
      {products.map(product => (
        <article className="rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-center bg-gray-100 aspect-square">
            <img src={product.imgUrl} alt={product.name} /> 
          </div>

          <div className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold tracking-wide">{product.name}</h2>

              <span className="flex items-center gap-x-1">
                {product.category === 'Pack' 
                  ? <BoxIcon className="h-4 w-4 text-gray-400 fill-current"/> 
                  : <TShirtIcon className="h-4 w-4 text-gray-400 fill-current"/>
                }
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  {product.category}
                </span>
              </span>
              </div>

            <span className="text-sm text-gray-400">
              Color: <span className="text-gray-600">{product.color}</span>
            </span>

            <a 
              href="" 
              className="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
            >
              View Mockups
            </a>
          </div>
        </article>
      ))}
    </>
  );
}