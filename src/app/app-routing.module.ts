import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
  },
  {
      path: '',
      component: MainLayoutComponent,
      data: {
          title: 'Home'
      },
   //   canActivate: [AuthGuard],
      children: [
          {
              path: 'home',
              loadChildren: 'src/app/home/home.module#HomeModule'
          },
          {
            path: 'courses',
            loadChildren: 'src/app/courses/courses.module#CoursesModule'
          },
          {
            path: 'login',
            loadChildren: 'src/app/login/login.module#LoginModule'
          },
          {
            path: 'signup',
            loadChildren: 'src/app/signup/signup.module#SignupModule'
          },
      ]
  },  
  ];
  

  @NgModule({
    imports: [
      CommonModule,
      [RouterModule.forRoot(routes)]
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule { }
