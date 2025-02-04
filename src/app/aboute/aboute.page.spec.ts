import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutePage } from './aboute.page';

describe('AboutePage', () => {
  let component: AboutePage;
  let fixture: ComponentFixture<AboutePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
