import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

import multipart from "express-multipart";

const app = express();
const port = 5000;

const products = [
    {
        id: 1,
        name: "Pink T-shirt",
        price: 29.99,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "pink",
    },

    {
        id: 2,
        name: "Green T-shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "green",
    },
    {
        id: 3,
        name: "Svart T-Shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "svart",
    },
    {
        id: 4,
        name: "Rosa T-Shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "rosa",
    },
    {
        id: 5,
        name: " Lila T-Shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "lila",
    },
    {
        id: 6,
        name: " Brun T-Shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "brun",
    },
    {
        id: 7,
        name: "Green T-shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "green",
    },
    {
        id: 8,
        name: "White T-shirt",
        price: 25.0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "http://localhost:5000/api/image/tshirtsample.jpg",
        urlSlug: "white",
    },
];

const menu = [
    { name: "Hem", href: "/" },
    { name: "Rea", href: "" },
    { name: "Kontakta oss", href: "" },
];

const pages = {
    home: {
        hero: {
            name: "Lorem ipsum dolor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageId: 2,
            url: "#",
        },
        spots: [
            {
                serverUrl: "http://localhost:5000/api/image/collection.jpg",
                label: "You buy now!",
                urlSlug: "WhiteBikini",
            },
            {
                serverUrl: "http://localhost:5000/api/image/collection.jpg",
                label: "You buy now!",
                urlSlug: "HarleyJacket",
            },
            {
                serverUrl: "http://localhost:5000/api/image/collection.jpg",
                label: "You buy now!",
                urlSlug: "UnconditionalScarff",
            },
        ],
        products: products,
    },
};

const images = [
    {
        id: 1,
        serverUrl: "collection.jpg",
    },
    {
        id: 2,
        serverUrl: "collectionresized.jpg",
    },

    {
        id: 3,
        serverUrl: "tshirtsample.jpg",
    },
];

app.use(cors());

app.get("/api/search", (req, res) => {
    const { q } = req.query;
    const filteredProducts = products.filter((x) =>
        x.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
    );

    const searchResult = {
        result: filteredProducts,
        count: filteredProducts.length,
    };
    res.json(searchResult);
});

// GET /api/products
app.get("/api/products/:urlSlug", (req, res) => {
    const { urlSlug } = req.params;

    const product = products.find((x) => x.urlSlug == urlSlug);
    console.log(urlSlug, product);

    res.json(product);
});

// GET /api/pages/:id
app.get("/api/pages/:id", (req, res) => {
    const { id } = req.params;
    const page = { ...pages[id] };

    if (page.hero && page.hero.imageId) {
        let imageId = page.hero.imageId;
        delete page.hero.imageId;

        let serverUrl;
        for (let image of images) {
            if (image.id == imageId) {
                serverUrl = image.serverUrl;
            }
        }

        page.hero.serverUrl = `http://localhost:5000/api/image/${serverUrl}`;
    }

    // also replace any imageId with the actual serverUrl
    res.json(page);
});

// GET /api/menu
app.get("/api/menu", function name(req, res) {
    res.json(menu);
});

// GET /api/products
app.get("/api/products", (req, res) => {
    res.json(products);
});

// GET /api/products
app.get("/api/spots", function name(req, res) {
    res.json(spots);
});

app.get("/api/hero", (req, res) => {
    res.json(hero[0]);
});

// fetch image from server
app.get("/api/image/:imageName", (req, res) => {
    const { imageName } = req.params;

    var serverRoot = fs.realpathSync(".");
    const filePath = path.join(serverRoot, `./media/${imageName}`);

    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
