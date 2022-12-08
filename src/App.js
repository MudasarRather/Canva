import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Dashboard/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Components/Auth/Auth/Auth";
import Main from "./Components/Admin/Main/Main";
import Init from "./Components/Init/Init";
import { Helmet } from "react-helmet";
import { conf } from "./conf/conf";
import Public from "./Components/Dashboard/Public/Public";
import Upgrade from "./Components/Upgrade/Upgrade";
import Homepage from "./Components/Homepage/Main/Main";
import Editor from "./Components/Editor/Editor";

const App = () => {
  const [meta, setMeta] = useState([]);
  useEffect(() => {
    // axios.post(conf.endPoint + "/api/getMeta").then((resp) => {
    //   setMeta(resp.data[0]);
    // });
  }, []);
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fourreck Editor</title>
        <meta name="description" content="Editor" />
        <meta name="keywords" content="Fourreck" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        <Switch>
          <Route
            path={"/:clt/:prj"}
            render={(props) => <Editor monthly={"5000"} user={"Mudasar"} />}
          />
          {/* 
          <Route
            path="/"
            render={(props) => (
              <Home
                {...props}
                meta={meta}
                monthly={meta.monthly}
                desc={meta.websiteDescription}
              />
            )} 
          />*/}
          {/* <Route path="/admin" component={Main} /> */}
          {/* <Route exact path="/auth" component={Auth} /> */}
          {/* <Route exact path="/i" component={Init} /> */}
          {/* <Route exact path="/" render={ (props)=>< Homepage {... props} meta={meta}  desc={meta.websiteDescription} />} /> */}

          {/* <Route  path="/" render={(props)=><Public {... props} meta={meta} desc={meta.websiteDescription}  /> } /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
