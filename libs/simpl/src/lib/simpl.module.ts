import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldDirective } from './directives/text-field.directive';
import { CheckboxDirective } from './directives/checkbox.directive';
import { RadioButtonDirective } from './directives/radio-button.directive';
import { RoundButtonDirective } from './directives/round-button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TextFieldDirective, CheckboxDirective, RadioButtonDirective, RoundButtonDirective],
})
export class SimplModule {}
