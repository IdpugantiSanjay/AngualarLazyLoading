import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
