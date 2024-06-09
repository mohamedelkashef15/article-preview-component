function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="card">
          <DisplayImage />
          <DisplayContent />
        </div>
      </div>
    </main>
  );
}

function DisplayImage() {
  return <img src="images/drawers.jpg" alt="avatar-michelle" />;
}

function DisplayContent() {
  return (
    <div className="content">
      <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
      <p className="description">
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got
        some simple tips to help you make any room feel complete.
      </p>

      <Avatar />
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="images/avatar-michelle.jpg" alt="avatar-michelle" />
      <div>
        <h3>Michelle Appleton</h3>
        <p>28 Jun 2020</p>
      </div>
    </div>
  );
}

export default App;
