export class FreeDucks {
   private state: any;
   private reducers: Array<Reducer>;
   private subscriptions: Array<Function>;
   
   constructor(state: any) {
       this.state = state;
       this.reducers = [];
       this.subscriptions = [];
   }

   dispatch(action: Action) {
       this.reducers.forEach((reducer) => {
           this.state = reducer.update(action, this.state);
       });

       const updates = Object.assign({}, this.state);
       this.updateSubscriptions(updates);
   }

   updateSubscriptions(newState: any) {
       this.subscriptions.forEach((subscription) => {
           subscription(newState);
       })
   }

   subscribe(callback: Function) {
       this.subscriptions.push(callback);
       callback(this.state);
   }

   registerReducer(reducer: Reducer) {
       this.reducers.push(reducer);
   }
}

export interface Action {
    name: string;
    data: any;
}

export interface Reducer {
    update: (action:Action, state:any) => {};
}
