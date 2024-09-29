import * as React from 'react';
//import { escape } from '@microsoft/sp-lodash-subset';
import { createContext, useState } from 'react';
import AppWrapper from './AppWrapper/AppWrapper';
export var AppContext = createContext({});
var KanbanSpfx = function (_a) {
    var totalcolumns = _a.totalcolumns;
    var _b = useState("Watermelon"), watermelon = _b[0], setWatermelon = _b[1];
    var AppContextValues = {
        watermelon: watermelon,
        setWatermelon: setWatermelon
    };
    console.log("working: " + totalcolumns);
    return (React.createElement(AppContext.Provider, { value: AppContextValues },
        React.createElement(AppWrapper, null)));
};
export default KanbanSpfx;
//# sourceMappingURL=KanbanSpfx.js.map