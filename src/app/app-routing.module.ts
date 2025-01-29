import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './modules/market/products-page/products-page.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/register', 
    pathMatch: 'full' 
  },
  { path: 'register', 
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  { path: 'products', 
    component: ProductsPageComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
