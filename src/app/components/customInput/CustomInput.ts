import { Component, Input } from "@angular/core";

@Component({
  selector: "app-customInput",
  templateUrl: "./CustomInput.component.html",
})
export class CustomInputComponent {
  @Input() label: string;

  @Input() inputSet: string;
  @Input() id: string | number;
  @Input() type: string;
  @Input() autocomplete: string;
  @Input() required: boolean;
}
