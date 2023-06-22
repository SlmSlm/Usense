import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CustomInputComponent } from "./components/customInput/CustomInput";
import { SignUpComponent } from "./components/signUp/SignUp.component";
import { StrengthBarComponent } from "./components/strengthBar/StrengthBar.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    StrengthBarComponent,
    CustomInputComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
