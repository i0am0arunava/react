import './TaskCard.css'

import Task from "./Task"
interface Props {
    tasks:TaskItem[]
}

const TaskList = (props: Props) => {

    const list = props.tasks.map((task, idx) => (
      <li key={idx}>
      <Task
        
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      </li>
    ));
    return <ul>{list}</ul>;
  };
export default TaskList
export interface TaskItem {
    title: string;
    description:string;
    dueDate:string
  }