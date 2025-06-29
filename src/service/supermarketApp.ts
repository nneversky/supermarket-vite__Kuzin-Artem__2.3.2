import ky from 'ky'

export type CardItem = {
  id: number;
  price: number;
  category: string;
  image: string;
  name: string;
};

export default class SupermarketApp {
  _baseUrl = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

  async getJsonList() : Promise<CardItem[] | unknown> {
  const json = await ky.get(this._baseUrl).json()
  return await json
  }
}