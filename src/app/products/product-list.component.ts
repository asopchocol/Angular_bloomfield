import {Component, OnInit, Pipe} from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './Product.service'


@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;

    _listFilter: string;
    errorMessage: string;
    showImage: boolean = true;

    constructor(private productService: ProductService) {
      this.filteredProducts = this.products;
    }
  
    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;

      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[] = [];
    
    products: IProduct[];
/*    constructor() {
      this.filteredProducts = this.products;
    this.listFilter='cart';
   }
*/    
    ngOnInit(): void {
       this.productService.getProducts().subscribe(
          products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => this.errorMessage = <any>error);
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase()
      return this.products.filter(
          (product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    notifyhandler(message: string):void{
        alert(message);
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
}