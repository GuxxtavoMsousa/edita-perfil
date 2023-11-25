import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarIoncPage } from './editar-ionc.page';

describe('EditarIoncPage', () => {
  let component: EditarIoncPage;
  let fixture: ComponentFixture<EditarIoncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarIoncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
