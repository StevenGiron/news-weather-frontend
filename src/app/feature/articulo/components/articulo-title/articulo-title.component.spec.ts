import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloTitleComponent } from './articulo-title.component';

describe('ArticuloTitleComponent', () => {
  let component: ArticuloTitleComponent;
  let fixture: ComponentFixture<ArticuloTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
