import slider1 from '../assets/slider/slider1.jpg'
import slider2 from '../assets/slider/slider2.jpg'
import slider3 from '../assets/slider/slider3.jpg'
import slider4 from '../assets/slider/slider4.jpg'
import slider5 from '../assets/slider/slider5.jpg'
import slider6 from '../assets/slider/slider6.jpg'

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const roles = {
  user: "user",
  admin: "admin",
  order_manager: "order_manager"
}

export const products = [
  {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
  },
  {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$34.99',
      color: 'Black',
  },
  {
      id: 9,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35.00',
      color: 'Black',
  }
]

export const product_navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: []
}

export const constant = {

  //users
  USER_LOGGED_IN: "USER_LOGGED_IN",
  USER_LOGGED_OUT: "USER_LOGGED_OUT",
  USER_DATA: "USER_DATA",
  TOKEN: "TOKEN",
  IS_LOGGED_IN: "IS_LOGGED_IN",
  LOG_OUT: "LOG_OUT",

  //wishlists
  ADD_WISHLIST: "ADD_WISHLIST",
  ALL_WISHLISTS: "ALL_WISHLISTS",
  ALL_WISHLISTS_PRODUCTS: "ALL_WISHLISTS_PRODUCTS",
  DELETE_WISHLIST_PRODUCT: "DELETE_WISHLIST_PRODUCT",

  //products
  ALL_PRODUCTS: "ALL_PRODUCTS",
  VIEW_PRODUCT: "VIEW_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",

  //cart items
  CART_ITEMS: "CART_ITEMS",
  ADD_CART_ITEM: "ADD_CART_ITEM",
  UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM"
}

export const colors = [
  "#fcba03", "#ba03fc", "#034efc", "#03fc45", "#fc0328"
]

export const socials = [
  {
    id: "product_facebook",
    type: "product_facebook"
  },
  {
    id: "product_insta",
    type: "product_insta"
  },
]

export const socialLinks = [
  {
    id: "facebook",
    type: "facebook",
  },
  {
    id: "twitter",
    type: "twitter",
  },
  {
    id: "instagram",
    type: "instagram",
  },
  {
    id: "linkedin",
    type: "linkedin",
  }
]

export const footer_links = [
  {
    id: "need_help",
    label: "Need Help",
    links: [
      {
        id: "contact_us",
        label: "Contact Us",
        to: "/contact-us",
      },
      {
        id: "return_policy",
        label: "Return Policy",
        to: "/return-policy"
      },
      {
        id: "faq",
        label: "FAQs",
        to: "/faq"
      },
      {
        id: "my_account",
        label: "Account",
        to: "/my-account"
      }
    ]
  },
  {
    id: "company",
    label: "Company",
    links: [
      {
        id: "about_us",
        label: "About Us",
        to: "/about-us",
      },
      {
        id: "our_team",
        label: "Our Team",
        to: "/our-team"
      },
      {
        id: "our_location",
        label: "Our location",
        to: "/our-location"
      }
    ]
  },
  {
    id: "more_info",
    label: "More Info",
    links: [
      {
        id: "terms_and_condition",
        label: "Terms & Condition",
        to: "/terms-condition"
      },
      {
        id: "privacy_policy",
        label: "Privacy Policy",
        to: "/privacy-policy"
      }
    ]
  }
]

export const sliderData = [
  {
    id: "slider_1",
    image: slider1
  },
  {
    id: "slider_2",
    image: slider2
  },
  {
    id: "slider_3",
    image: slider3
  },
  {
    id: "slider_4",
    image: slider4
  },
  {
    id: "slider_5",
    image: slider5
  },
  {
    id: "slider_6",
    image: slider6
  }
]