import { BrowserModule } from '@angular/platform-browser';
import { ViewModule } from './view/view.module';
import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
//import { ProductListComponent } from './products/product-list.component';
//import { StarComponent } from './shared/star.component';
//import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

//import { converToSpacesPipe } from './shared/convert-to-spaces.pipe';
//import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
//    ProductListComponent,
//    StarComponent,
//    converToSpacesPipe,
//    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ViewModule, 
//  FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: WelcomeComponent }
    ], {useHash: true}), 
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }