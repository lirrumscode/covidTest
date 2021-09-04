import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Encuesta1Page } from './encuesta1.page';

describe('Encuesta1Page', () => {
  let component: Encuesta1Page;
  let fixture: ComponentFixture<Encuesta1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encuesta1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Encuesta1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
