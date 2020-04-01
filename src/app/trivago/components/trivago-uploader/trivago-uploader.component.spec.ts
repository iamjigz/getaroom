import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivagoUploaderComponent } from './trivago-uploader.component';

describe('TrivagoUploaderComponent', () => {
  let component: TrivagoUploaderComponent;
  let fixture: ComponentFixture<TrivagoUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivagoUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivagoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
