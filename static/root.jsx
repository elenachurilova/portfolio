var Router = ReactRouterDOM.BrowserRouter
var Link = ReactRouterDOM.Link
var Route = ReactRouterDOM.Route 
var Switch = ReactRouterDOM.Switch


function Homepage() {

    function MyProjects() {
        return <div>This is my projects: </div>
    }
    
    function MyResume() {
        return <div>This is my Resume: </div>
    }
    
    function MyStory() {
        return <div>This is my story: </div>
    }
    
    function Block() {
    
        if (content === "projects") {
            return <MyProjects />
        } else if (content === "resume") {
            return <MyResume />
        } else if (content === "story") {
            return <MyStory />
        } else {
            return <div></div>
        }
        
    }

    const [ content, setContent ] = React.useState("none")

    return (
        <React.Fragment>
            <ul>
                <li onClick={() => setContent("projects")}>My Projects</li>
                <li onClick={() => setContent("resume")}>My Resume</li>
                <li onClick={() => setContent("story")}>My Story</li>
            </ul>
            <Block />
        </React.Fragment>
        
    )
}

function About() {
    return <div> This is a tiny react site </div>
}

function App() {

    return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            

            <div className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
            </nav>
    
            
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
        </Router>
    );

}

ReactDOM.render(<App />, document.getElementById('root'))