import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Encuesta2Page } from './encuesta2.page';

describe('Encuesta2Page', () => {
  let component: Encuesta2Page;
  let fixture: ComponentFixture<Encuesta2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encuesta2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Encuesta2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
