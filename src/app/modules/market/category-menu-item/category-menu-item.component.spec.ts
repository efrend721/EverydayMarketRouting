import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuItemComponent } from './category-menu-item.component';

describe('CategoryMenuItemComponent', () => {
  let component: CategoryMenuItemComponent;
  let fixture: ComponentFixture<CategoryMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryMenuItemComponent]
    });
    fixture = TestBed.createComponent(CategoryMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
