export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POST = "REQUEST_POST";
export const RECIEVE_POST = "RECIEVE_POST";

const MY_API_KEY = '650b72acce1642978df2293bccb52f95';

export function getchannel(channel){
return ({type:SELECT_CHANNEL,channel})
}


export function requestPosts(){
    return ({type:REQUEST_POST,})
  
}


export function recievePosts(data){
    return ({type:RECIEVE_POST,data:data.articles})
  
}


export function fetchPosts(channel){
    return function(dispatch){
        dispatch(requestPosts);
        return fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_API_KEY}`)
                .then(response => JSON.response,
                    error => console.log(error)
                    )
                .then((json) => dispatch(recievePosts(json)))
    }

}


