const element = (
  //   Write your code here.
  <div className="bg-container d-flex flex-column justify-content-center">
    <h1 className="h1">Super Over League</h1>
    <div className="d-flex flex-row justify-content-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
