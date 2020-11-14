import React from "react";
const NotFoundPage = ({ location, match, history }) => {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <p>{location.pathname}</p>
      <div>
        <button onClick={() => history.push("/")}>홈으로</button>
      </div>
    </div>
  );
};
export default NotFoundPage;
