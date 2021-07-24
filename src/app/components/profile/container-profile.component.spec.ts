import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerProfileComponent } from './container-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { DataService } from 'src/app/data.service';
import { of } from 'rxjs';

describe('ContainerProfileComponent', () => {
  let component: ContainerProfileComponent;
  let fixture: ComponentFixture<ContainerProfileComponent>;

  beforeEach(async () => {
    const getUsersSpy = jasmine.createSpyObj<DataService>(['getAllUsers']);
    getUsersSpy.getAllUsers.and.returnValues(of([]))

    await TestBed.configureTestingModule({
      declarations: [ContainerProfileComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DataService, userValue: getUsersSpy }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
