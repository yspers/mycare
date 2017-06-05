import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquire-recipient',
  templateUrl: './enquire-recipient.component.html',
  styleUrls: ['./enquire-recipient.component.css']
})
export class EnquireRecipientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	console.log("click");
  }

}
