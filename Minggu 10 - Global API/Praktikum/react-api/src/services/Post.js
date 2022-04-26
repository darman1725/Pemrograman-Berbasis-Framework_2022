import { domainPath } from "./Config";

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
            method: 'post',                    // method POST untuk input/insert data
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)   //Kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
        })
        .then((result ) => {
          resolve(result);     //Jika sukses menerima response dari server maka resolve response ke user
            }, (err) => {
            reject(err);       //Jika terjadi error dari server (server down, dll),
        })
    
    })
    return promise;
}
export default PostAPI;
