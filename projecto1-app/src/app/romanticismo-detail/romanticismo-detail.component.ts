import { Component, OnInit } from '@angular/core';
import { romanticismoList } from './../shared/consts/romanticismo.const';
import { ActivatedRoute, Routes } from '@angular/router';
import { RomanticismoComponent } from './../romanticismo/romanticismo.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-romanticismo-detail',
  templateUrl: './romanticismo-detail.component.html',
  styleUrls: ['./romanticismo-detail.component.scss']
})
export class RomanticismoDetailComponent implements OnInit {
  public romanticismo: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const romanticismoID = Number(params.get("romanticismoID"))

      this.romanticismo= romanticismoList.find( (sigleromanticismo: any) => romanticismoID === sigleromanticismo.id)
  })
  }
}



