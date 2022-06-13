import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  get color(): string {
    return this.colorService.color
  }

  set color(input) {
    this.colorService.color = input
  }

}