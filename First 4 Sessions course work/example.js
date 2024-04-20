const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('30363c8024de45308c00ba3e5eeabb9c');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.everything({
  
  q: 'Machine Learning',
  language: 'en',
  
}).then(response => {
    lst = []

   for( i = 0 ; i<5 ; i++){
     lst.push(response.articles[i].title);
    }

    console.log(lst)
  
//   const keysLength = Object.keys(response).length;
//   console.log(keysLength); // Output: Number of keys in the response object
//   console.log(Object.keys(response))
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
});

let arr = [0,1,2,3]
arr[0] = 5
console.log(arr)

