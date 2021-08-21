import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = ({ id, children, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
