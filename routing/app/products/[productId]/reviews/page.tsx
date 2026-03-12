export default async function ProductReviews({ params }: {
    params: Promise<{ productId: string }>
}) {
    const { productId } = await params;

    return(
        <>
        <h1>Product Details {productId} </h1>
        <h2>All Reviews</h2>
        </>
    );
}