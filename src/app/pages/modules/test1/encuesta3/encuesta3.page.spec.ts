import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Encuesta3Page } from './encuesta3.page';

describe('Encuesta3Page', () => {
  let component: Encuesta3Page;
  let fixture: ComponentFixture<Encuesta3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encuesta3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Encuesta3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
