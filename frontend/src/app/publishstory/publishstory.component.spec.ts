import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishstoryComponent } from './publishstory.component';

describe('PublishstoryComponent', () => {
  let component: PublishstoryComponent;
  let fixture: ComponentFixture<PublishstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
