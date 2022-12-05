const products = [
    {
        id: 1,
        name: "Dracula RGX",
        price: 5500,
        cate: 'Road',
        image: require('../../assets/dra.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 2,
        name: "Nytro Dust SLX",
        price: 4890,
        cate: 'Supercharged',
        image: require('../../assets/xe7.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Red ETAPS",
        price: 3890,
        cate: 'Road',
        image: require('../../assets/xe2.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 4,
        name: "Dogma Fani",
        price: 4890,
        cate: 'Road',
        image: require('../../assets/xe3.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 5,
        name: "Paris 105 11s" ,
        price: 5490,
        cate: 'Road',
        image: require('../../assets/xe5.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 6,
        name: "Nytro Dust Deore",
        price: 5590,
        cate: 'Supercharged',
        image: require('../../assets/xe9.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 7,
        name: "NiD Dragon 3s",
        price: 4990,
        cate: 'Road',
        image: require('../../assets/xe8.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 8,
        name: "Grevil Ekar F",
        price: 4490,
        cate: 'Road',
        image: require('../../assets/grevil_f_ekar.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 9,
        name: "Prince Ultegra",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/prince_ultegra_11s.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 10,
        name: "Prince Force",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/xe10.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 11,
        name: "Prince Navy",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/xe11.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 12,
        name: "Prince Lux",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/xe12.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 13,
        name: "Prince Max",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/xe13.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
    {
        id: 14,
        name: "Prince Z Fold",
        price: 3990,
        cate: 'Road',
        image: require('../../assets/xe14.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
    },
];

export default products;