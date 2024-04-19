import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p id="intro">Attain self-satisfaction by working in a challenging environment where I can optimally utilize my skills and abilities and also contribute my hard work towards the success of your organization.</p>
        </section>
        <section>
          <div className="project">
            <h3>SKILLS</h3>
            <p>HTML, CSS, JavaScript, Node.js, Github, Docker</p>
          </div>
          <div className="project">
            <h3>PUBLICATIONS AND PATENTS</h3>
            <p>Cause Analysis of Students’ Dropout Rate Using PSPP</p>
            <p>Intravenous Fluid Monitoring System</p>
          </div>
          <div className="project">
            <h3>ACADEMIC PROJECTS</h3>
              <p>Fluid Infusion Monitoring System (Prototype)</p>
              <p>Blockchain Explorer Using Node.js</p>
              <p>CRUD Operations using Node.js</p>
              <p>Basic Calculator using HTML and CS</p>
          </div>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Contact No: 7973354043</p>
          <p>Email ID: divpreetkaur08@gmail.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; Made by Divpreet Kaur</p>
      </footer>
    </div>
  );
}

export default App;
