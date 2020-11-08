import { Component, OnInit } from '@angular/core';
import { DropdownItem } from 'src/app/app-common/ui-components/dropdown/dropdown-item';

import { BaseHttpService } from '../../app-common/base-http.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css'],
  providers: [BaseHttpService],
})
export class CreateClaimComponent implements OnInit {
  public fakeData: DropdownItem[] = [
    { displayValue: 'One', value: 1 },
    { displayValue: 'Two', value: 2 },
  ];

  public selectedFakeData = 2;

  public textboxValue = 'S';

  constructor(public httpSevice: BaseHttpService) {}

  ngOnInit(): void {}

  public onSelectedChange(selectedValue) {
    alert(selectedValue);
  }

  public showTextboxValue() {
    alert(this.textboxValue);
  }
}
