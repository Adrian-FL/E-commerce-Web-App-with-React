const ProductsCardGrid = ({ heading, products }) => {
    return (
        <>
            <h2 className={"popular-products-heading"}>{heading}</h2>
            <section className="items">
                {products.map((product, i) => {
                    var productDetailsUrl = `/products/${product.urlSlug}`;
                    return (
                        <article key={i} className="item">
                            <a href={productDetailsUrl}>
                                <section>
                                    <img src={product.imageUrl} alt="#" />
                                    <div className="item-details">
                                        <span>{product.name}</span>
                                        <span>{product.price} SEK</span>
                                    </div>
                                </section>
                            </a>
                        </article>
                    );
                })}
            </section>
        </>
    );
};
export default ProductsCardGrid;
