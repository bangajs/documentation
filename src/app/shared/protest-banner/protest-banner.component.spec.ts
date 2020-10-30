import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtestBannerComponent } from './protest-banner.component';

describe('ProtestBannerComponent', () => {
  let component: ProtestBannerComponent;
  let fixture: ComponentFixture<ProtestBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtestBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtestBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
