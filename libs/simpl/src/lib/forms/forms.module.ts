import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
  imports: [CommonModule],
})
export class FormsModule {}
