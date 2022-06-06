import { Route, Routes } from "react-router-dom";

import TaskPage from "./app/features/pages/TaskPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
    </Routes>
  );
}

export default MainRouter;
