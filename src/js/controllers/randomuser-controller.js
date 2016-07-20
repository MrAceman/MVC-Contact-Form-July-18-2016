// import _ from 'lodash';
// import $ from 'jquery';
//
// class Randomuser {
//   constructor (photo) {
//     this.photo      = photo || '';
//   }
//
// getPhoto() {
//
//   let baseURL = 'http://api.randomuser.me/'
//   let resultsOptions = "results=1"
//   let includeOptions = "inc=picture"
//   let photo;
//
//   $.ajax({
//       url: baseURL + "?" + resultsOptions + "&" + includeOptions,
//       dataType: 'json'
//   }).then(function(photoArray) {
//       photo = photoArray.results[0].picture.large;
//       console.log(photo);
//   });
//
//   return photo;
//   console.log(photo);
// };
// }
//
// export {Randomuser};
