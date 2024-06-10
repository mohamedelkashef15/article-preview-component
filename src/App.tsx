import { useState } from "react";

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
  return (
    <div className="drawers">
      <img src="images/drawers.jpg" alt="avatar-michelle" />
    </div>
  );
}

function DisplayContent() {
  return (
    <div className="content">
      <h2>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
      <p className="description">
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got
        some simple tips to help you make any room feel complete.
      </p>
      <div className="info">
        <Avatar />
        <Share />
      </div>
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

function Share() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="share">
      <img src="images/icon-share.svg" alt="share" onClick={() => setIsOpen(!isOpen)} />
      <div className={`social ${isOpen ? "" : "hidden"}`}>
        <span>SHARE</span>
        <a href="https://facebook.com">
          <img src="images/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="https://pinterset.com">
          <img src="images/icon-pinterest.svg" alt="facebook" />
        </a>
        <a href="https://x.com">
          <img src="images/icon-twitter.svg" alt="facebook" />
        </a>
      </div>
    </div>
  );
}

export default App;
