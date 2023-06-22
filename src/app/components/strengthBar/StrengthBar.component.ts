// import { Component, Input } from "@angular/core";

// @Component({
//   selector: "app-strengthBar",
//   templateUrl: "./StrengthBar.component.html",
// })
// export class StrengthBarComponent {
//   @Input() passwordLength: boolean;
//   @Input() low: boolean;
//   @Input() medium: boolean;
//   @Input() high: boolean;
// }

import { Component, Input, OnChanges } from "@angular/core";
import { TypeOfPasswordStrengthEnum } from "../../enums/type-of-password-strength.enum";

type Styles = {
  invalid: string[];
  low: string[];
  medium: string[];
  strong: string[];
  default: string[];
};

@Component({
  selector: "app-strength-bar",
  templateUrl: "./strengthBar.component.html",
})
export class StrengthBarComponent implements OnChanges {
  @Input() typeOfStrength: TypeOfPasswordStrengthEnum | null =
    TypeOfPasswordStrengthEnum.DEFAULT;
  public barArray = [...Array(3).keys()];
  public typeOfStyle!: string[];
  public strengthStyles: Styles = {
    invalid: ["bg-red-200", "bg-red-200", "bg-red-200"],
    low: ["bg-red-200", "bg-gray-200", "bg-gray-200"],
    medium: ["bg-yellow-200", "bg-yellow-200", "bg-gray-200"],
    strong: ["bg-green-200", "bg-green-200", "bg-green-200"],
    default: ["bg-gray-200", "bg-gray-200", "bg-gray-200"],
  };

  ngOnChanges(): void {
    if (!this.typeOfStrength) {
      this.typeOfStyle = this.strengthStyles.default;
      return;
    }
    this.typeOfStyle = this.strengthStyles[this.typeOfStrength as keyof Styles];
  }

  trackByFn(index: number): number {
    return index;
  }
}
