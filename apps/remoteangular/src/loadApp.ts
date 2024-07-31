import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createMemoryHistory, Listener } from 'history';
import { Location } from '@angular/common';

interface HistoryProps {
    onNavigate: Listener
}

// interface ParentHistoryProps {
//     onParentNavigate: (pathName: string) => void
// }


// export const mount = (historyProps: HistoryProps): ParentHistoryProps => {
//     console.log('do I get news')
//     // const history = createMemoryHistory();

//     // history.listen(historyProps.onNavigate as Listener);

//     bootstrapApplication(AppComponent, appConfig).catch((err) =>
//         console.error(err)
//     );

//     return {
//         onParentNavigate: (pathName) => {
//             // const { pathname as currentPathname} = history.location
//             // if(pathName !== currentPathname) {
//             //     history.pushState(pathName)
//             // }
//             console.log('callback to container', pathName)
//         }
//     }
// }

// export { mount };

const mount = () => {
    // const history = createMemoryHistory();
    // history.listen(onNavigate)

    bootstrapApplication(AppComponent, appConfig).catch((err) =>
        console.error(err)
    );
}


export { mount };

