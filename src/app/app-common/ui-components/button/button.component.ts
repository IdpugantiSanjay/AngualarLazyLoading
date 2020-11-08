import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.buttonClick.emit();
  }
}
