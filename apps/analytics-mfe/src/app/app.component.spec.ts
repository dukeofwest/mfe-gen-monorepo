import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('AppComponent (MFE: analytics-mfe)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the remote app component', () => {
    expect(component).toBeTruthy();
  });

  it('should pass automated accessibility (a11y) audit via jest-axe', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const results = await axe(compiled);
    expect(results).toHaveNoViolations();
  });

  it('should update reactive state using Signals', () => {
    expect(component.count()).toBe(0);
    component.increment();
    expect(component.count()).toBe(1);
    component.decrement();
    expect(component.count()).toBe(0);
  });
});
