import style from "./Welcome.module.css";

export const metadata = {
  title: "Welcome - Task Master",
  description: "Task Master Welcome Page",
};

export default function Home() {
  return (
    <div className={style.main}>
      <div className={style.introduction}>Task Master</div>
      <div className={style.descripiton}>
        Task Master is a task management application designed to help
        individuals and teams efficiently organize, track, and manage their
        tasks and projects. It provides a centralized platform where users can
        create, assign, prioritize, and monitor tasks from start to finish.
      </div>
    </div>
  );
}
