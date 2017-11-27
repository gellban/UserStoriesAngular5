import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryComponent } from './userstory.component';

describe('UserstoryComponent', () => {
  let component: UserstoryComponent;
  let fixture: ComponentFixture<UserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
