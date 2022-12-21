import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoTaskComponent } from './descricao-task.component';

describe('DescricaoTaskComponent', () => {
  let component: DescricaoTaskComponent;
  let fixture: ComponentFixture<DescricaoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
