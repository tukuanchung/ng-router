import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { pageTitle: 'Dashboard' },
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./pages/tables/tables.module').then((m) => m.TablesModule),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'tables', component: TablesComponent },

// useHash: true 網頁不會真的換頁，會變https://localhost:4200/#/dashboard (推薦)
// useHash: false 是預設，https://localhost:4200/dashboard 實際上不是一個網頁，佈在server上會找不到網頁，需在做特殊設定
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
