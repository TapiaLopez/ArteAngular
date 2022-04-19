import { Component, OnInit } from '@angular/core';
import { romanticismoList } from '../shared/consts/romanticismo.const';

@Component({
  selector: 'app-romanticismo',
  templateUrl: './romanticismo.component.html',
  styleUrls: ['./romanticismo.component.scss']
})
export class RomanticismoComponent implements OnInit {
  public romanticismo = romanticismoList;
  constructor() { }

  ngOnInit(): void {
  }

}
