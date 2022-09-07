import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { URegisterComponent } from './u-register/u-register.component';
import { ULoginComponent } from './u-login/u-login.component';
import { UGetallComponent } from './u-getall/u-getall.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { MedCategoryComponent } from './med-category/med-category.component';
import { ALoginComponent } from './a-login/a-login.component';
import { ARegisterComponent } from './a-register/a-register.component'
import { PaymentComponent } from './payment/payment.component';
import { MedRegisterComponent } from './med-register/med-register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateMedComponent } from './update-med/update-med.component';
import { MedGetallComponent } from './med-getall/med-getall.component';
import { FindMedicineComponent } from './find-medicine/find-medicine.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    URegisterComponent,
    ULoginComponent,
    UGetallComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent,
    MedCategoryComponent,
    ALoginComponent,
    ARegisterComponent,
    MedRegisterComponent,
    UpdateUserComponent,
    UpdateMedComponent,
    MedGetallComponent,
    FindMedicineComponent,
    PaymentComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
