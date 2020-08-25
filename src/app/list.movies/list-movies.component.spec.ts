import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMoviesComponent } from './list-movies.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListMoviesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create list movies component', () => {
    expect(component).toBeTruthy();
  });
});
