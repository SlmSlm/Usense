import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./components/signUp/SignUp.component";
import { StrengthBarComponent } from "./components/strengthBar/StrengthBar.component";
import { CustomInputComponent } from "./components/customInput/CustomInput";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    StrengthBarComponent,
    CustomInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
