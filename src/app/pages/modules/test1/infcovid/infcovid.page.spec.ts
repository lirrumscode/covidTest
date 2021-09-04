import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfcovidPage } from './infcovid.page';

describe('InfcovidPage', () => {
  let component: InfcovidPage;
  let fixture: ComponentFixture<InfcovidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfcovidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfcovidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
