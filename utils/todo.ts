export class Todo {
  id: number;
  todoText: string;

  constructor(todoText: string) {
    this.id = new Date().getTime();
    this.todoText = todoText;
  }
}
