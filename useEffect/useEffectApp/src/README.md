# how ui is rendered in real-life apps 
* we have an initial render -> loader/placeholder 
*parallely browser make a request for the data 
* replace the initial loader/placeholder with actual data 

# react must provide feature to just call a function at different stages of an app 

flag=false, data=[] //here we are loading the placeholder 

1. render the ui -> loading
2. make a request to the server of app 
3. get the data -> data state -> rendered the page 