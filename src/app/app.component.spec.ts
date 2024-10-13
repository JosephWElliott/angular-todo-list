import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('practice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Good Luck!');
  });

  it('should add a new todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.newTodoName = 'Test To-Do';
    app.addTodo();
    expect(app.todos.length).toBe(1);
    expect(app.todos[0]).toBe('Test To-Do');
  });

  it('should not add an empty todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(window, 'alert');
    app.newTodoName = '   ';
    app.addTodo();
    expect(app.todos.length).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('To-do name cannot be empty.');
  });

  it('should delete a todo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.todos = ['Test To-Do'];
    app.deleteTodo(0);
    expect(app.todos.length).toBe(0);
  });
});