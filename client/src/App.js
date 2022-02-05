import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import SearchPage from "./pages/SearchPage/SearchPage";

import "./App.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route
                        path="products/:urlSlug"
                        element={<ProductDetailsPage />}
                    />
                    <Route path="search" element={<SearchPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
