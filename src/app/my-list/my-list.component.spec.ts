import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyListComponent } from './my-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('MyListComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [MyListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create my-list component', () => {
    expect(component).toBeTruthy();
  });
});
