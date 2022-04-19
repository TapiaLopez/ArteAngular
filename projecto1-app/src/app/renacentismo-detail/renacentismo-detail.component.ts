import { renacentismoList } from './../shared/consts/renacimiento.const';
import { ActivatedRoute, Routes } from '@angular/router';
import { RenacentismoComponent } from './../renacentismo/renacentismo.component';
import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-renacentismo-detail',
  templateUrl: './renacentismo-detail.component.html',
  styleUrls: ['./renacentismo-detail.component.scss']
})
export class RenacentismoDetailComponent implements OnInit {
public renacentismo: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
this.route.paramMap.subscribe(params =>{
  const RenacentismoID = Number(params.get("renacentismoID"))

  this.renacentismo= renacentismoList.find( (siglerenacentismo: any) => RenacentismoID === siglerenacentismo.id)
})

    }
  }


