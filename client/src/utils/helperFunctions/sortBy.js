import { orderBy } from 'lodash'

export const sortBy = (goods, filterBy) => {
    switch (filterBy) {
      case 'Рекомендации':
        return goods;
      case 'От дорогим к дешевым':
        return orderBy(goods, 'price', 'desc');
      case 'От дешевых к дорогим':
        return orderBy(goods, 'price', 'asc')
      default:
        return goods;
    }
}