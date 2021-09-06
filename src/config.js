var API_URL;
if(process.env.NODE_ENV === 'development') {
    API_URL = 'https://handwritetest.herokuapp.com'
}
  
if(process.env.NODE_ENV === 'production') {
    API_URL = 'https://handwrite-server.herokuapp.com'
}

export const API = API_URL;