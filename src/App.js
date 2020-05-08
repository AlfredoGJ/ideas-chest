import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idea from './components/idea/Idea'
import {Router, Route} from 'react-router'
import ListItem from './components/idea-list-item/IdeaListItem'
import IdeaListItem from './components/idea-list-item/IdeaListItem';
import IdeaList from './components/ideas-list/IdeaList';
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { createStore } from 'redux';
import reducer from './reducers/reducer'
import { Provider } from 'react-redux';

const defaultState = {
  ideas:[
    {
      title: "Pasito Perron",
      description: "Hay que poner a una figura del niño dios a bailar una cancion bien k-gada jsjsjs apoko no razita",
      category: "Pendejadas Random"
    }
  ],
  categories:{
    "Pendejadas Random": null
  },
  editorOpen:false
}

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 


function App() {
  return(
    <Provider store = {store} >
      <IdeaList>

      </IdeaList>
    </Provider>
  )
  
}


export default App;
