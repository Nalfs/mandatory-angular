import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task, StatusType } from './constants';

export class TaskService {
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject
taskList: Task[];
// stream: Observable <Task[]>;
observer;

  constructor () {
    // FIXME - mockData remove later
    const mockData = [
      {
        id: 0,
        status: StatusType.NotStarted,
        title: 'Mocked not started',
        description: 'Mocked description',
      },
      {
        id: 1,
        status: StatusType.Completed,
        title: 'Mocked completed',
        description: 'Mocked description',
      },
      {
        id: 2,
        status: StatusType.InProgress,
        title: 'Mocked inprogress',
        description: 'Mocked description',
      }
    ];
    this.taskList = mockData;
  }

   // Takes arary of tasks and statusType, returns filteredArray
   filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  }


  getTasks(): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return new Observable((observer) => {
      this.observer = observer;
      return this.observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
    console.log(id, status);
    this.taskList.find(item => item.id === id).status = status;
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    this.taskList.push({
      id: this.taskList.length,
      status: StatusType.NotStarted,
      title: title,
      description: description,

    });
    this.observer.next(this.taskList);
  }
}
