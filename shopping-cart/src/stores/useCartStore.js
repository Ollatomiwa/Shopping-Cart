export const useCartStore = defineStore('cart', {
    state: () => ({ 

    }),
    getters: {
      products: [
        {
            id: 1,
            name: 'Iphone 15',
            price: 999,
            image: ''
        },
        {
            id: 2,
            name: 'Samsung S22',
            price: 999,
            image: ''
        },
        {
            id: 3,
            name: 'Huawei P',
            price: 999,
            image: ''
        },
        {
            id: 4,
            name: 'TECNO P15',
            price: 400,
            image: ''
        },
      ]
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })