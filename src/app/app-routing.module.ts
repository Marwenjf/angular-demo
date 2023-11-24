import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDirvenComponent } from './template-dirven/template-dirven.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

const routes: Routes = [
  {path:'shop',component:AdminTemplateComponent,
    children:[
  {
    path: 'products',
    children: [
      { path: '',component: ProductsComponent},
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'add', component: AddProductComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent },
  { path: 'form-driven', component: TemplateDirvenComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactComponent , canActivate: [AuthGuard]},
]},
  { path: 'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
