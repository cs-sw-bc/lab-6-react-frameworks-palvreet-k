import {notFound} from "next/navigation";
import { parse } from "path";
export default async function ReviewDetails({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) {
    const { productId, reviewId } = await params;
    if(parseInt(reviewId) > 1000){
        notFound();
    }
    return(
        <>
        <h1>Product Details {productId} </h1>
        <h2>Review Details {reviewId} </h2>
        </>
    );
}