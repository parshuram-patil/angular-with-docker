import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() loadingMessage = "loading"
  @Input() stylesObj = {
    'margin-top': '0px',
    'margin-bottom': '0px',
    'padding-top': '0px',
    'padding-bottom': '0px',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
