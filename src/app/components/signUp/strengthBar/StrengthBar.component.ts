import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-strengthBar",
  templateUrl: "./StrengthBar.component.html",
})
export class StrengthBarComponent {
  @Input() passwordLength: boolean;
  @Input() low: boolean;
  @Input() medium: boolean;
  @Input() high: boolean;
}
