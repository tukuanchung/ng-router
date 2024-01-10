import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
      //子component會套用到上層component所以
      //DashboardComponent做完會套用到LayoutComponent，做完會在套用Appcomponent
      path: '',
      component:LayoutComponent,
      children:[
       { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
       { path: 'dashboard', component: DashboardComponent, data: {pageTitle: 'Dashboard'} },
       { path: ':name', component: TablesComponent, canActivate: [AuthGuard] },
      //  { path: 'tables/:name', component: TablesComponent },
       { path: 'tables',
         loadChildren: () =>
           import('./pages/tables/tables.module').then(m => m.TablesModule)
      },
    ]
  },

  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'tables', component: TablesComponent },
];
// useHash: true 網頁不會真的換頁，會變https://localhost:4200/#/dashboard (推薦)
// useHash: false 是預設，https://localhost:4200/dashboard 實際上不是一個網頁，佈在server上會找不到網頁，需在做特殊設定
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
