export function GetData(type) {
    // let BaseURL = 'http://localhost/restAPI/restku/';
    let BaseURL = 'http://localhost/GOLearn/server/';
    // let BaseURL = 'http://go-learn.web.id/server/';

    let params = '';
    for (var i = 0 ; i < arguments.length; i++) {
      params += arguments[i]+'/';
    }

    return new Promise((resolve, reject) => {
    
        fetch(BaseURL+params, {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

      });
}