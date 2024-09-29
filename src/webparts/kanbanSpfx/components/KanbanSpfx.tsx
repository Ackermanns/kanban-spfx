import * as React from 'react';
//import styles from './KanbanSpfx.module.scss';
import type { IKanbanSpfxProps } from './IKanbanSpfxProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { createContext, useState } from 'react';
import AppWrapper from './AppWrapper/AppWrapper';

export const AppContext = createContext({});

const KanbanSpfx: React.FunctionComponent<IKanbanSpfxProps> = ({totalcolumns}) => {

  // constant used in app context
  const AppContextValues = {
    totalcolumns
  }
  
  return (
    <AppContext.Provider value={AppContextValues}>
      <AppWrapper />
    </AppContext.Provider>
  )
}

export default KanbanSpfx;