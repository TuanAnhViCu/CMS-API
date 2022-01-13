import { ShowClassComponent } from './profile/show-class/show-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { IndexComponent } from './Admin/index/index.component';
import { CreateClassComponent } from './Admin/create-class/create-class.component';
import { TableComponent } from './Admin/table/table.component';
import { CalendarStudyComponent } from './profile/calendar-study/calendar-study.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile-user',component:ProfileComponent,
    children:[
      {path:'calendar-study',component:CalendarStudyComponent},
      {path:'list-class',component:ShowClassComponent}
    ]
  },
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'admin',component:IndexComponent,
    children:[
      { path:'create-class',component:CreateClassComponent},
      {path:'manager',component:TableComponent}
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
