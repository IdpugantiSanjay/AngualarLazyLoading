import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownItem } from './dropdown-item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input('dropdownOptions') dropdownOptions: Array<DropdownItem>;

  @Input() selected: DropdownItem;
  @Output() selectedChange = new EventEmitter<DropdownItem>();

  constructor() {}

  ngOnInit(): void {}

  onDropdownChange($event) {
    const value = $event.target.value;
    this.selectedChange.emit(value);
    this.selected = value;
  }
}
