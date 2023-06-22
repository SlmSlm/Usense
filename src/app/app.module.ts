import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { CustomFormComponent } from "./components/CustomForm/custom-form.component";
import { SignUpComponent } from "./components/signUp/SignUp.component";

@NgModule({
  declarations: [AppComponent, SignUpComponent],
  imports: [BrowserModule, ReactiveFormsModule, CustomFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
