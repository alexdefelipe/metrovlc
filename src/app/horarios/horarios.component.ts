import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  showVar: boolean = false;

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  toggleChild() {
    this.showVar = !this.showVar;
    console.log(this.showVar);
  }

}
