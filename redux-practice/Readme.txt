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
Step 2 : Then those actions are forwarded to the reducer, the reducer then does what the action wants, the reducer to do.
Step 3 : And then the reducer, spits out a new state, which effectively will replace the existing state in that Central Data Store.
Step 4 : And when that happens, when that state in that data store is updated, subscribing components are notified, so that they can update their UI.
That's how Redux works.


--------------------
Reducer function
--------------------
After creating a store what we have to procedd with...? What do we do with that store..?
that store should manage some data and the data which it manages is in the end determined by the reducer function,because it's the reducer function which will produce new state snapshots.
The reducer has to go of spitting out a new state snapshot whenever an action reaches it.And when we run this code for the first time,the reducer will also be executed with a default action,so to say, that should spit out the initial state.
A reducer function is a standard JavaScript function,but it will it be called by the Redux library and it will then always receive two pieces of input,two parameters,
    1.The old or existing state 
    2.The action that was dispatched
And then this reducer function must return a certain output.It must always return a new state object.

And therefore a reducer function should be a pure function.Which basically means that the same inputs,the same values for inputs always should produce exactly the same output.

And there should be no side effects inside of that function.So you must not send a HTTP request or write something to local storage or fetch something from local storage there.

Instead, a reducer should really just be a function that takes the given inputs, which are provided by Redux and then produces the expected output, a new state object.

Now we will pass the reducer function as an argument to createStore(counterReducer), which means we are saying that only the counterReducer() function can change the state no other reducer haven't permittions to change the state.
if you want to change the store then pass the reducer function as an argument to createStore(counterReducer).

Typically we can do different actions inside the same reducer based on the action type which we have dispatched.


--------------------------------------------------------------------------------------------
        How to use redux in react (How can we connect redux to the react app)
--------------------------------------------------------------------------------------------
For connecting react with redux we have to install a 3rd party package calledd "react-redux", 
for that run this following command ---> npm install redux react-redux

1. Create store
2.Create reducer
3.Provide reducer for our store

----------------------------------------------------
Now how can we provide the store for components
----------------------------------------------------

We have to import Provider at root component (App component) for keep available store to the all components.
It is not mandatory to provide store to all components, but may be tha case where if state need all components the we should keep that store available to all components.
We have to pass a store as prop on provider component to say which store we have to give to all components.


----------------------------------------------------
Using Redux data in React components
----------------------------------------------------
For displaying the data in our components from the store we have to get the data from store, for this we take a help from another hook called useSelector().
There is also a useStore() hook but useSelector() is more powerfull.
useSelector() will exctract the part of state from the state which we need.
in Class based components we use "connect" method to connect redux to react instead of useSelector() hook.

---------------
useSelector()
---------------
Now we need to pass a function to the useSelector() which  is excecuted by redux of function which then basically determines which piece of data we want to extract from our store.

Of course at the moment we have a very simple state.Just an object with a counter property.

But in bigger applications,you will have more complex states with tons of different properties maybe nested objects and arrays and therefore being able to just get a slice, just a tiny part of that overall state object in a easy way is worth a lot.
And that's what use selector allows us to do.

For this we should pass a function to it,a function of which we'll receive the state managed by Redux and then we return the part of the state which you wanna extract.

Now the great thing is that when you use use selector,React Redux will automatically set up a subscription to the Redux store for this component.
So your component will be updated and will receive the latest counter automatically whenever that data changes in the Redux store.

That's why use selector is a very useful hook and why it is the hook we use for getting data out of the store.

If you ever would unmount this component if it would be removed from the DOM for whatever reason, React Redux would also automatically clear the subscription for you.

So it manages that subscription for you behind the scenes.
