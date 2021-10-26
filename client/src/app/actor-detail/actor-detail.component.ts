import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  @Input()
  actor!: Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
