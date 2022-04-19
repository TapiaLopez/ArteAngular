import { Component, OnInit } from '@angular/core';
import { renacentismoList } from '../shared/consts/renacimiento.const';

@Component({
  selector: 'app-renacentismo',
  templateUrl: './renacentismo.component.html',
  styleUrls: ['./renacentismo.component.scss']
})
export class RenacentismoComponent implements OnInit {
public renacentismo = renacentismoList;
  constructor() { }

  ngOnInit(): void {
  }

}
