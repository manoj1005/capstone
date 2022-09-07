import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALoginComponent } from './a-login/a-login.component';
import { ARegisterComponent } from './a-register/a-register.component';
import { AboutComponent } from './about/about.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactComponent } from './contact/contact.component';
import { FindMedicineComponent } from './find-medicine/find-medicine.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { MedCategoryComponent } from './med-category/med-category.component';
import { MedGetallComponent } from './med-getall/med-getall.component';
import { MedRegisterComponent } from './med-register/med-register.component';
import { PaymentComponent } from './payment/payment.component';
import { UGetallComponent } from './u-getall/u-getall.component';
import { ULoginComponent } from './u-login/u-login.component';
import { URegisterComponent } from './u-register/u-register.component';
import { UpdateMedComponent } from './update-med/update-med.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {"path":"userregister",component:URegisterComponent},
  {"path":"adduser",component:AddUserComponent},
  {"path":"userlogin",component:ULoginComponent},
  {"path":"getallusers",component:UGetallComponent},
  {"path":"getallmed",component:MedGetallComponent},
  {"path":"header",component:HeaderComponent},
  {"path":"menu",component:MedCategoryComponent},
  {"path":"medRegister",component:MedRegisterComponent},
  {"path":"adminlogin",component:ALoginComponent},
  {"path":"adminregister",component:ARegisterComponent},
  {"path":"logout",component:LogoutComponent},
  {"path":"about",component:AboutComponent},
  {"path":"contact",component:ContactComponent},
  {"path":"payment/:id",component:PaymentComponent},
  {"path":"updateUser/:id",component:UpdateUserComponent},
  {"path":"updatemed/:id",component:UpdateMedComponent},
  {"path":"findMedicineByName/:medicineName",component:FindMedicineComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
