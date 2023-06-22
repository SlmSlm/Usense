import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { Observable } from "rxjs";
import { TypeOfPasswordStrengthEnum } from "src/app/enums/type-of-password-strength.enum";

import { StrengthBarComponent } from "../strengthBar/StrengthBar.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-custom-form",
  standalone: true,
  imports: [CommonModule, StrengthBarComponent, ReactiveFormsModule],
  templateUrl: "./custom-form.component.html",
})
export class CustomFormComponent {
  @Input() typeOfStrength: Observable<TypeOfPasswordStrengthEnum>;
  @Input() onSubmit: () => void;
  @Input() form: any;
}
