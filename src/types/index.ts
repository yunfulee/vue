export interface Banner {
  id: number | string;
  image: string;
  title: string;
}

export interface Category {
  text: string;
  icon: string;
}

export interface Product {
  id: number | string;
  title: string;
  desc: string;
  price: string;
  tag: string;
  thumb: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}
