var API_URL;
if(process.env.REACT_APP_STAGE === 'development') {
    API_URL = 'https://handwritetest.herokuapp.com'
}
  
else if(process.env.REACT_APP_STAGE === 'production') {
    API_URL = 'https://handwrite-server.herokuapp.com'
}

else {
    API_URL = 'http://localhost:8000'
}

export const API = API_URL;