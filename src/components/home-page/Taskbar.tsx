import { useState, useContext, useEffect } from "react";
import { harperAddNewTask } from "../../utils/harperdb/addNewTask";
import { UserContext } from "../../contexts/UserContext";
import { TasksContext } from "../../contexts/TasksContext";
import Button from "../Button";

interface Props {
  selectedTaskId: string;
  setSelectedTaskId: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTaskName: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  pauseTimer: () => void;
}

const TaskBar = ({
  selectedTaskId,
  setSelectedTaskId,
  setSelectedTaskName,
  setErrorMessage,
  setSeconds,
  pauseTimer,
}: Props) => {
  const { username } = useContext(UserContext);
  const { tasks, getAndSetTasks } = useContext(TasksContext);

  const [isUserAddingNewTask, setIsUserAddingNewTask] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleChangeTaskInput = (e: { target: HTMLInputElement }) => {
    setTaskInputValue(e.target.value);
  };

  useEffect(() => {
    if (tasks.length) {
      setSelectedTaskId(tasks[0].id);
      setSelectedTaskName(tasks[0].task_name);
      setSeconds(0);
      pauseTimer();
    }
  }, [tasks]);

  const handleSelectTask = (e: { target: HTMLSelectElement }) => {
    const { options, selectedIndex, value } = e.target;
    const text = options[selectedIndex].text;

    setErrorMessage("");
    setSelectedTaskId(value);
    setSelectedTaskName(text);
    setSeconds(0);
    pauseTimer();
  };

  const handleClickAddNewTask = () => {
    if (taskInputValue.trim() === "") {
      setErrorMessage("Type a task!");
      return;
    }
    addNewTask();
    resetAddingNewTask();
  };

  const addNewTask = async () => {
    try {
      const { response } = await harperAddNewTask(username, taskInputValue);
      if (response.status === 200) {
        // Task added to db successfully
        getAndSetTasks(username);
        console.log(tasks);
      } else setErrorMessage("Whoops, something went wrong");
    } catch (err) {
      console.log(err);
      setErrorMessage("Whoops, something went wrong");
    }
  };

  const resetAddingNewTask = () => {
    setTaskInputValue("");
    setIsUserAddingNewTask(false);
  };

  return (
    <div>
      {isUserAddingNewTask ? (
        <>
          <input
            type="text"
            placeholder="Enter task here..."
            value={taskInputValue}
            onChange={handleChangeTaskInput}
            className="border border-stone-500 border-2 p-2 mr-2"
          />
          <Button color="primary" handleClick={handleClickAddNewTask}>
            Add task
          </Button>
          <Button
            color="secondary"
            handleClick={() => setIsUserAddingNewTask(false)}
            extraClasses="ml-1"
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <select
            className="mr-4 p-2 px-8 border border-stone-500 border border-2 rounded-md"
            name="task"
            id="task"
            onChange={handleSelectTask}
          >
            {selectedTaskId === "" && (
              <option disabled selected value="" hidden>
                -- Select a task --
              </option>
            )}
            {tasks.map((task, i) => (
              <option
                key={task.id}
                value={task.id}
                selected={selectedTaskId ? task.id === selectedTaskId : i == 0}
              >
                {task.task_name}
              </option>
            ))}
          </select>
          <Button
            handleClick={() => setIsUserAddingNewTask(true)}
            color="primary"
          >
            New Task
          </Button>
        </>
      )}
    </div>
  );
};

export default TaskBar;
