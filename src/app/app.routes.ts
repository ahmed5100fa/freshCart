import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { BrandComponent } from './layout/pages/brand/brand.component';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';
import { authGuard } from './shared/gaurdes/auth/auth.guard';
import { prevLinkGaurd } from './shared/gaurdes/prevLink/prev-link.guard';
import { ForgetPasswordComponent } from './layout/additions/forgetPassword/forget-password/forget-password.component';
import { ShipingAddressComponent } from './layout/additions/shipingAddress/shiping-address/shiping-address.component';
import { ProdepCatComponent } from './layout/additions/prodep-cat/prodep-cat.component';
import { ProdeponbrandComponent } from './layout/additions/prodeponbrand/prodeponbrand.component';
import { WishListComponent } from './layout/additions/wish-list/wish-list.component';
import { AllOrdersComponent } from './layout/additions/all-orders/all-orders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'cart', component: CartComponent, canActivate: [authGuard], title: 'Cart' },
  { path: 'category', component: CategoriesComponent, title: 'Category' },
  { path: 'forgotPassword', component: ForgetPasswordComponent,canActivate: [prevLinkGaurd], title: 'ForgetPassword' },
  { path: 'login', component: LoginComponent, canActivate: [prevLinkGaurd], title: 'Login' },
  { path: 'register', component: RegisterComponent, canActivate: [prevLinkGaurd], title: 'Register' },
  { path: 'shippingAddress/:CartId', component: ShipingAddressComponent, title: 'ShippingAddress' },
  { path: 'brand', component: BrandComponent, title: 'Brand' },
  { path: 'allOrder/:Userid', component: AllOrdersComponent, title: 'allOrders' },
  { path: 'wishList', component: WishListComponent , canActivate: [authGuard] , title: 'WishList' },
  { path: 'proCategory/:catId', component: ProdepCatComponent, title: 'productCategory' },
  { path: 'proBrand/:brandId', component: ProdeponbrandComponent, title: 'productBrand' },
  { path: 'details/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
