import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivagoFormComponent } from './trivago-form.component';

describe('TrivagoFormComponent', () => {
  let component: TrivagoFormComponent;
  let fixture: ComponentFixture<TrivagoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivagoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
