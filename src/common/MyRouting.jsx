import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home';
import Covid from '../covid';
import WithRef from '../context/RefSample';
import ClassesCounter from '../counter/classes/counter';
import HooksCounterV1 from '../counter/hooks/counter-v1';
import HooksCounterV2 from '../counter/hooks/counter-v2';
import HooksCounterV3 from '../counter/hooks/counter-v3';
import ContactsHooks from '../contacts/Contacts-hooks';
import ContactsClass from '../contacts/Contacts-class';
import ContactDetails from '../contacts/contact-details/ContactDetails-hooks';
import NotFound from '../404';
import TodosClassic from '../todos/state/todos';
import TodosContextHooks from '../todos/context-use-reducer/todos';
import ReduxClassic from '../todos/redux/classic/connect/todos';
import ReduxHooks from '../todos/redux/classic/hooks/todos';
import ToolkitClassic from '../todos/redux/toolkit/connect/todos';
import ToolkitHooks from '../todos/redux/toolkit/hooks/todos';
import Reddits from '../reddit';
import Clock from '../clock';
import Step1 from '../best/steps/Step1';
import Step2 from '../best/steps/Step2';
import Step3 from '../best/steps/Step3';
import Step4 from '../best/steps/Step4';
import Step5 from '../best/steps/Step5';
import SignUp from '../security/SignUp';
import SignIn from '../security/SignIn';
import Profile from '../security/Profile';
import PasswordReset from '../security/PasswordReset';

import SignOff from '../security/SignOff';

import ContextDrill from '../context/PropDrilling/L1-SimpleState';
import ContextWith from '../context/ContextSample/L1-SimpleContext';
import About from '../about';
//const About = React.lazy(() => import('./about'));

export default function MyRouting({ location }) {
  return (
    <>
      {/* <React.Suspense fallback={<h1>Loading...</h1>}   > */}
      <Switch location={location}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route
          path='/counter/classes'
          render={() => <ClassesCounter init={5} />}
        />
        <Route
          path='/counter/hooks-v1'
          render={() => <HooksCounterV1 init={5} />}
        />
        <Route
          path='/counter/hooks-v2'
          render={() => <HooksCounterV2 init={5} />}
        />
        <Route
          path='/counter/hooks-v3'
          render={() => <HooksCounterV3 init={5} />}
        />
        <Route path='/context/reference' component={WithRef} />
        <Route path='/contacts/covid' component={Covid} />
        <Route path='/contacts/hooks' component={ContactsHooks} />
        <Route path='/contacts/class' component={ContactsClass} />
        <Route path='/contact/:id?' component={ContactDetails} />
        <Route path='/todos/ClassicState' component={TodosClassic} />
        <Route path='/todos/ContextHooks' component={TodosContextHooks} />
        <Route path='/todos/ReduxClassic' component={ReduxClassic} />
        <Route path='/todos/ReduxHooks' component={ReduxHooks} />
        <Route path='/todos/ToolkitClassic' component={ToolkitClassic} />
        <Route path='/todos/ToolkitHooks' component={ToolkitHooks} />
        <Route path='/reddits' component={Reddits} />
        <Route path='/clock' component={Clock} />
        <Route path='/context/PropDrill' component={ContextDrill} />
        <Route path='/context/WithContext' component={ContextWith} />
        <Route path='/best/step1' component={Step1} />
        <Route path='/best/step2' component={Step2} />
        <Route path='/best/step3' component={Step3} />
        <Route path='/best/step4' component={Step4} />
        <Route path='/best/step5' component={Step5} />
        <Route path='/auth/signup' component={SignUp} />
        <Route path='/auth/signin' component={SignIn} />
        <Route path='/auth/profile' component={Profile} />
        <Route path='/auth/passwordreset' component={PasswordReset} />
        <Route path='/auth/signoff' component={SignOff} />

        <Route component={NotFound} />
      </Switch>
      {/* </React.Suspense> */}
    </>
  );
}
