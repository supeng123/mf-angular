// export type RouteChangedEvent<RouteData = never> = {
//     route: {
//       path: string;
//       app: string;
//     //   data?: RouteData;
//     };
//   };

  export type RouteChangedEvent = {
    route: {
      path: string;
      app: string;
    };
  };