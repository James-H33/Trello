export class Todo {
  public title: string;
  public isComplete: boolean;

  constructor(data?: any) {
    const defaults = {
      title: '',
      isComplete: false,
      ...data
    };

    this.title = defaults.title;
    this.isComplete = defaults.isComplete;
  }
}
