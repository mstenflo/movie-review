import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailComponent } from './actor-detail.component';
import { Actor } from '../Actor'

describe('ActorDetailComponent', () => {
  let component: ActorDetailComponent;
  let fixture: ComponentFixture<ActorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailComponent);
    component = fixture.componentInstance;

    let expectedActor : Actor = {
      id: 1,
      image: "img",
      name: "John Doe",
      asCharacter: "Forrest Gump"
    }
    component.actor = expectedActor;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
