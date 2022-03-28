import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { converToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild(
      [
        { path: 'products', 
         component: ProductListComponent },
        { path: 'products/:id',
         canActivate: [ProductDetailGuard], 
         component: ProductDetailComponent }
      ]
    ),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    converToSpacesPipe,
    ProductDetailComponent
  ]
})

export class ProductModule { }
