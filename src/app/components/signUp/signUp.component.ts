import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signUp",
  templateUrl: "./signUp.component.html",
})
export class SignUpComponent {
  title = "Sign up";
  password = "";
  passwordLength = false;
  low = false;
  medium = false;
  high = false;

  @ViewChild("testForm") someNewNameFrom: NgForm | null = null;

  onSubmit() {
    prompt("Congr, u are the best")
  }

  passwordStrengthHandler(value: string) {
    let letters = value.match(/[A-z]/g);
    let numbers = value.match(/[0-9]/g);
    let symbols = value.match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/);

    if (value.length < 8) {
      this.passwordLength = true;
    }

    if (value.length === 0) {
      this.low = false;
      this.medium = false;
      this.high = false;
      this.passwordLength = false;
    }

    //easy
    if (letters && !numbers && !symbols) {
      this.low = true;
      this.medium = false;
      this.high = false;
    }

    if (numbers && !letters && !symbols) {
      this.low = true;
      this.medium = false;
      this.high = false;
    }

    if (symbols && !numbers && !letters) {
      this.low = true;
      this.medium = false;
      this.high = false;
    }
    //easy

    //medium
    if (letters && symbols && value.length > 8) {
      this.medium = true;
      this.low = false;
      this.high = false;
    }

    if (letters && numbers && value.length > 8) {
      this.medium = true;
      this.low = false;
      this.high = false;
    }

    if (numbers && symbols && value.length > 8) {
      this.medium = true;
      this.low = false;
      this.high = false;
    }
    //medium

    //high
    if (letters && numbers && symbols && value.length > 8) {
      this.medium = false;
      this.low = false;
      this.high = true;
    }
    //high
  }
}
