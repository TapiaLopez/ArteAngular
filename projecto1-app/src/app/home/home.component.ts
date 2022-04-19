import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeList =[ {
id:2,
    Image:"./assets/fotos/home/romanticismo.jpg",
    categoria: "ROMANTICISMO",
  },
  {
    id:1,
        Image:"./assets/fotos/home/.jpg",
        categoria: "RENACENTISMO"
      }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
