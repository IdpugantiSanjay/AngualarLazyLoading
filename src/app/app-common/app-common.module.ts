import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui-components/button/button.component';
import { DropdownComponent } from './ui-components/dropdown/dropdown.component';
import { TextboxComponent } from './ui-components/textbox/textbox.component';
import { FormsModule } from '@angular/forms';

const declarationsAndExports = [
  ButtonComponent,
  DropdownComponent,
  TextboxComponent,
];

@NgModule({
  declarations: [...declarationsAndExports],
  imports: [CommonModule, FormsModule],
  exports: [...declarationsAndExports],
})
export class AppCommonModule {}
