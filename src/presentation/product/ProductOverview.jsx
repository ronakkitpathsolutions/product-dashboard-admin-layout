import Button from "../../common/Forms/Button";
import Selector from "../../common/Forms/Selector";
import Icon from "../../common/Icon";
import ProductImages from "../../common/utilities/Products/ProductImages";
import ProductSocial from "../../common/utilities/Products/ProductSocial";
import Reviews from "../../common/utilities/Products/Reviews";
import Spinner from "../../common/utilities/Spinner";
import useProductOverview from "../../components/product/productOverview";
import useProducts from "../../components/product/products";
import useWishlists from "../../components/wishlists/wishlists";
import { socials } from "../../constant";
import { classNames, convetRuppesFormat, ratings } from "../../utils/function";
import ProductReview from "../review/ProductReview";

const ProductOverview = ({id, data, ...props}) => {
    const { wishlists, addToWishList, user_id } = useProducts()
    const {count, handleQuantity, reviews, isLoading, showImage, handleShowCase, configData, handleCartItem, isButtonLoading } = useProductOverview(id, data)
    useWishlists(user_id)

    return (
        <div {...props}>
            <div className="flex justify-center items-center lg:flex-row-reverse flex-col gap-8">
                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / {data?.data?.category}</p>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{data?.data?.product_name}</h2>
                    <div className=" flex flex-row-reverse justify-between  mt-5">
                            <Button handleClick={() => addToWishList(id)}  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" >
                                <Icon className="w-6 h-6 text-bold text-red-500" type={wishlists[id] ? "heart_solid" : "heart"} />
                            </Button>
                        <div className=" flex flex-row space-x-3">
                            <Reviews {...{ ...ratings(4, 5), svgClassName: "w-4 h-4"}} />
                            <ProductSocial {...{ socials }} className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s" />
                        </div>
                    </div>
                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{data?.data?.product_description}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">₹{convetRuppesFormat(data?.data?.price * count || 1)}</p>
                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between items-center mb-4">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span onClick={() => handleQuantity(count, 'remove')} className="rounded rounded-r-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-500 text-[22px] text-white cursor-pointer border border-indigo-500 w-9 h-9 flex items-center justify-center">
                                    -
                                </span>
                                <input id="counter" aria-label="input" className="h-[2.28rem] border border-gray-300 h-full text-center w-14" type="text" value={count} onChange={(e) => e.target.value} />
                                <span onClick={() => handleQuantity(count, 'add')} className="rounded rounded-l-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-500 text-[22px] text-white cursor-pointer border border-indigo-500 w-9 h-9 flex items-center justify-center">
                                    +
                                </span>
                            </div>
                        </div>
                        <hr className=" bg-gray-200 w-full my-2" />
                        <div className=" flex flex-row justify-between items-center mt-4">
                            <p className="font-medium text-base leading-4 text-gray-600">Available Colours</p>
                            <Selector menuList={data?.data?.colors?.map(data => {return{value:data, name:data}})} className="w-auto" {...configData} />
                        </div>
                        <hr className=" bg-gray-200 w-full mt-4" />
                    </div>
                    <div className="flex justify-between items-center" >
                    <Button className="rounded text-bold text-white py-2 px-4 bg-yellow-500 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-2" >
                        Buy now <Icon className="ml-2 w-5 h-5" type="tag_solid" />
                    </Button>
                    <Button handleClick={() => handleCartItem(id)} className="rounded text-bold text-white py-2 px-4 bg-indigo-500 p-0 border-0 inline-flex items-center justify-center text-gray-500 mt-2" >
                        { isButtonLoading ? "Loading" : "Add to cart" }{isLoading ? <Spinner spinnerStyle="ml-1 -mt-[3px] w-4 h-4" /> : <Icon className="ml-2 w-6 h-6" type="cart" />}
                    </Button>
                    </div>
                </div>

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row-reverse flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 flex justify-center items-start">
                        <img alt="Wooden Chair Previw" src={showImage ? data?.data?.products_images[showImage - 1]?.src : data?.data?.product_image} />
                    </div>
                    <ProductImages {...{images: data?.data?.products_images || [], mainImage: data?.data?.product_image, handleShowCase}} className={classNames(data?.data?.products_images?.length < 3 ? "flex 2xs:flex-wrap lg:flex-nowrap lg:flex-col": "grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-4 gap-6","w-full lg:w-1/5 lg:h-[650px] lg:overflow-auto scrollbar-hide")} />
                </div>
            </div>
            <div className="w-full mx-auto sm:w-96 md:w-8/12 xl:w-full flex lg:flex-row-reverse flex-col lg:gap-8 sm:gap-6 gap-4">
                <ProductReview {...{reviews, isLoading}} className="mt-[4rem] text-gray-600 flex justify-between items-start flex-col lg:flex-row w-full body-font" />
            </div>
        </div>
    );
};

export default ProductOverview;
