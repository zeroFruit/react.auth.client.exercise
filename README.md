# Authentication - Server

### Cookies vs Tokens

__Cookie__

The purpose of cookies is to bring state into stateless protocol which is HTTP.

In HTTP solely by including these cookies on request can identify us to the server.

Cookies are included on all HTTP request by default in header.

Also server can place information into the cookies so later on server can identify that client.

* Automatically included on all requests
* Unique to each domain ( cannot be shared)
* Cannot be sent to different domains



__Token__

* Have to manually wire up
* Can be sent to any domain



# Authentication - Client

### Redux Thunk

* ```dispatch``` : Makes sure the action gets sent to all reducers after sent through all different middlewares.

The main purpose of Redux Thunk is that we can directly access ```dispatch``` method.

Redux Thunk returns __function__ instead of object from Action Creator. By returning a function we can directly access to the ```dispatch``` function. And inside of this function we can make any async requests, actions. So we can dispatch action anytime we want.



### CORS

User on the website which has its own domain, sub-domain, port tries to make AJAX Request to different domain, sub-domain, port.

__The purpose of CORS is soly for protecting the users in the browser__



### LocalStorage

LocalStorage data is not shared across domains.



### Dispatch

The same one with Redux Thunk ```dispatch``` is the property of Redux ```store``` 's ```dispatch```.

Big solution for updating our app states before rendering any Components.
