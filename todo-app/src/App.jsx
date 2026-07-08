import PageTitle from './components/PageTitle/PageTitle';
import TaskContainer from "./components/TaskContainer/TaskContainer";

function App() {
  const containerTitle = "Tasks Due Today";
  const tasks = [
  { time: "9:00 AM", text: "Get eggs", isUrgent: true },
  { time: "9:05 AM", text: "Clean your room", isUrgent: false },
  { time: "10:00 AM", text: "Complete task1", isUrgent: true },
  { time: "4:00 PM", text: "Go for a walk", isUrgent: false },
  ];

  return (
    <>
      <PageTitle/>
      <TaskContainer containerTitle={containerTitle} tasks={tasks} />
    </>
  );
}

export default App;