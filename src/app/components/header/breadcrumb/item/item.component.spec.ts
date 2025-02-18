import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbItemComponent } from './item.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbItemComponent;
  let fixture: ComponentFixture<BreadcrumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
