import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function PageContent() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/" component={Projects}/>
                <Route exact path="/" component={Contact}/>
            </Switch>
        </div>
    )
}

export default PageContent;
