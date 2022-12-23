import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { store } from './store';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
            <App />
        </Provider>
      </DndProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
