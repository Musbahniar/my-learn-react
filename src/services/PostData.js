export function PostData(type, userData) {
    // let BaseURL = 'http://localhost/GOLearn/server/';
    // let BaseURL = 'http://localhost/Ganesha-Operation/GOLearn-v2/fromServer/server/';
    let BaseURL = 'http://localhost/Ganesha-Operation/GOLearn-v2/server/';
    // let BaseURL = 'http://localhost/restAPI/restku/';

    return new Promise((resolve, reject) =>{
    
        fetch(BaseURL+type, {
            method: 'POST',
            body: JSON.stringify(userData)
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