import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivagoPageComponent } from './trivago-page.component';

describe('TrivagoPageComponent', () => {
  let component: TrivagoPageComponent;
  let fixture: ComponentFixture<TrivagoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivagoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivagoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
