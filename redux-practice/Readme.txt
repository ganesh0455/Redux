----------------
Redux
----------------

Subscription is for getting latest data from the state.

For getting latest data when state get updated the components should be subscribe to the store so that the lates data will be shown on the UI

When ever the data changes in the state the store notify the components , and then the components can get the data they need.

For changing the data in state, the components never directly manipulate the store data, we have a subscription but we don't have a data flow in the other direction , atleast not a direct data flow, for overcome this we use a concept called Reducers.

We have a reducer function and this function is responsible for mutate(change) store data. Reducer functions are not useReducer() hook , Reducer functions are general concepts.

Reducer functions are the functions which takes some input and spits the new output.

Now the summary is , for getting latest data the components are subscribing to the store for small slices and reducer function will mutate the stores data and returns the updated data.

Now how could we connect the components and the reducer function..?

----------------
Summary
----------------

When we click on add to cart to button , it will dispatch(triggers) an action, here an action is just a JS object which describe the kind of operation the reducer should perform.
therefore redux will forwards an action to the reducer reads that description of desired operation and then that operation is performed by the reducer.

Step 1 : Components dispatch actions , which describe what should be done, but don't do it directly,
Step 2 : .Then those actions are forwarded to the reducer, the reducer then does what the action wants, the reducer to do.
Step 3 : .And then the reducer, spits out a new state, which effectively will replace the existing state in that Central Data Store.
Step 4 : .And when that happens, when that state in that data store is updated, subscribing components are notified, so that they can update their UI.
That's how Redux works.