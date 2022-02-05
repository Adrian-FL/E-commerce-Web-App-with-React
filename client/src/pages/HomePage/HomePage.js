import { useEffect, useState } from "react";

import ProductsCardGrid from "../../components/ProductCardGrid/ProductCardGrid";
import Spots from "../../components/Spots/Spots";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/pages/home")
            .then((resp) => resp.json())
            .then((page) => setPageData(page));
    }, []);

    return (
        pageData && (
            <>
                <Hero {...pageData.hero} />
                <Spots spots={pageData.spots} />
                <ProductsCardGrid
                    heading={"Populära produkter"}
                    products={pageData.products}
                />
            </>
        )
    );
};
export default HomePage;
