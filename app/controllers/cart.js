import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      /* console.log(this.model);
        console.log("acc",acc);
        console.log("item",item); */
      return acc + item.price;
    }, 0);
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}
