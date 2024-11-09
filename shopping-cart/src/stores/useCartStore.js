import { defineStore } from "pinia";
import {useToast} from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore('cart', {
    state: () => ({ 

      products: [
        {
            id: 1,
            name: 'Iphone 15',
            price: 999,
            image: 'https://media.istockphoto.com/id/2150443807/photo/two-hands-holding-smart-phone-on-green-background.jpg?s=1024x1024&w=is&k=20&c=P4I5oGXJJYO3JFu6E5PtC6RBj-n4xfx5oNzSfH0WCWs='
        },
        {
            id: 2,
            name: 'Samsung S22',
            price: 1500,
            image: 'https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063762_1280.jpg'
        },
        {
            id: 3,
            name: 'Huawei P',
            price: 800,
            image: 'https://cdn.pixabay.com/photo/2020/05/30/23/21/huawei-5240720_640.jpg'
        },
        {
            id: 4,
            name: 'TECNO P15',
            price: 400,
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_640.jpg'
        },
      ],
      cartItems: []
    }),
    getters: {
      countCartItems(state) {
        return state.cartItems.length;
      }
    },
    actions: {
      addToCart(items) {
        let index = this.cartItems.findIndex(product => product.id === items.id);
        if(index !== -1) {
          this.cartItems[index].quantity +=1;
          toast.success("Your item has been updated ", {
            timeout: 2000
          });
        } else {
          items.quantity = 1;
          this.cartItems.push(items);
          toast.success("Your item has been saved ", {
            timeout: 2000
          });
        }
      },
      incrementQ(items) {
        let index = this.cartItems.findIndex(product => product.id === items.id);
        if(index !== -1) {
          this.cartItems[index].quantity +=1;
          toast.success("Your item has been updated ", {
            timeout: 2000
          });
        }
      },  
      decrementQ(items){
        let index = this.cartItems.findIndex(product => product.id === items.id);
        if(index !== -1) {
          this.cartItems[index].quantity -=1;
          if(this.cartItems[index].quantity === 0) {
            this.cartItems = this.cartItems.filter(product => product.id !== items.id)
          }
          toast.success("Your item has been updated ", {
            timeout: 2000
          });
        }
      },
      removeItems (items) {
        this.cartItems = this.cartItems.filter(product => product.id !== items.id)
        toast.success("Your item has been removed ", {
          timeout: 2000
        });
      }
    }
});
