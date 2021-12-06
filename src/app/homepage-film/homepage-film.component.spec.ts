import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFilmComponent } from './homepage-film.component';

describe('HomepageFilmComponent', () => {
  let component: HomepageFilmComponent;
  let fixture: ComponentFixture<HomepageFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
