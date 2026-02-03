import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestIntro } from './rest-intro';

describe('RestIntro', () => {
  let component: RestIntro;
  let fixture: ComponentFixture<RestIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
