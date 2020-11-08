import { Component, OnInit } from '@angular/core';

import { BaseHttpService } from '../../app-common/base-http.service';

@Component({
  selector: 'app-create-claim',
  templateUrl: './create-claim.component.html',
  styleUrls: ['./create-claim.component.css'],
  providers: [BaseHttpService],
})
export class CreateClaimComponent implements OnInit {
  constructor(public httpSevice: BaseHttpService) {}

  ngOnInit(): void {}
}
