// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random image to the page.
 */
let a;
function randomizeImage() {
    const location = [
        {lat:37.422, lng: -122.084},
        {lat: 39.9514829982124, lng: 32.82864193896349 , contentString: '<h1> Ankara </h1>' +
    '<div>' + "<p><b>Ankara</b>, historically referred to as <b>Angora </b>, is the capital of Turkey " + "</p> <p> <i> Visited once in 2013. </i></p></div>" },
        {lat:-0.6182972019850904, lng:73.09703007580428, contentString: '<h1> Malé </h1>' +
    '<div>' + "<p><b>Malé</b>, known for its beautiful islands, is the capital and most populous city in the Republic of Maldives. " + "</p> <p> <i> Hope to visit soon! </i></p></div>" },
        {lat: 24.470814082528822, lng: 39.617508263244964, contentString: '<h1> Medinah </h1>' +
    '<div>' + "<p><b>Medinah</b>, the birthplace of the Prophet of Islam, is a sacred place of worship for Muslims around the world. " + "</p> <p> <i> Counting days to visit! </i></p></div>" },
        {lat: 36.10039521673435, lng: -112.11208148905413, contentString:'<h1> Grand Canyon </h1>' +
    '<div>' + "<p><b>Grand Canyon</b>, home to the band of red rocks, is a historical National site in Arizona, United States " + "</p> <p> <i> Visited once in 2020. </i></p></div>" },
        {lat: 37.76768251244913, lng: -122.43029199523379, contentString:'<h1> San Francisco </h1>' +
    '<div>' + "<p><b>San Francisco</b>, home to the infamous <b>Golden gate Bridge </b> and the <b>Silicon Valley</b>, is a city in California, United States " + "</p> <p> <i> Lucky to be living here! </i></p></div>" },
        {lat: 35.06307913148578, lng: 135.74217581612047, contentString: '<h1> Kyoto </h1>' +
    '<div>' + "<p><b>Kyoto</b>, famous for Cherry Blossom and Bhuddist temples, is a tourisic city in Japan " + "</p> <p> <i>  Hope to visit soon!</i></p></div>" },
        {lat: 41.00549054415733, lng: 28.976631407284994, contentString:'<h1> Istanbul </h1>' +
    '<div>' + "<p><b>Istanbul</b>, historically referred to as <b>Constantinople </b>, is the largest city in Turkey" + "</p> <p> <i> Visited once in 2013. </i></p></div>" },
        {lat: 35.68965902375199, lng: 139.7674216656253, contentString: '<h1> Tokyo </h1>' +
    '<div>' + "<p><b>Tokyo</b>, known for mouth-watering Sushi, is the de facto capital and most populous city in Japan " + "</p> <p> <i> Hope to visit soon! </i></p></div>" },
        {lat: 6.520748303489362, lng: 3.3560439057592677, contentString:'<h1> Lagos </h1>' +
    '<div>' + "<p><b>Lagos</b>, known for its unmatched <b>energy </b>, is the largest and most populous city in Nigeria " + "</p> <p> <i> Lived there between 2018 and 2019. </i></p></div>" },
        {lat: 35.01411452234941, lng: 135.77028411968627, contentString:'<h1> Kyoto </h1>' +
    '<div>' + "<p><b>Kyoto</b>, famous for Cherry Blossom and Bhuddist temples, is a tourisic city in Japan " + "</p> <p> <i>  Hope to visit soon! </i></p></div>" },
        {lat: 1.3675398068198992, lng: 103.8737622961487, contentString: '<h1> Singapore </h1>' +
    '<div>' + "<p><b>Singapore</b>, infamous for its amazing architectural feats, is the capital of Singapore " + "</p> <p> <i> Hope to visit soon! </i></p></div>" },
    ];


  // The images directory contains 11 images, so generate a random index between
  // 1 and 11.
  
  const imageIndex = Math.floor(Math.random() * 11) + 1;
  const imgUrl = 'images/image-' + imageIndex + '.jpg';

  const imgElement = document.createElement('img');
  imgElement.src = imgUrl;

  const mapElement = document.createElement('div');
  mapElement.setAttribute("id", "map")
  mapElement.style.height = "400px";
  
  const map = new google.maps.Map(
      mapElement,
      {center: {lat: location[imageIndex].lat, lng: location[imageIndex].lng }, zoom: 12
     ,mapTypeId: "hybrid",  tilt: 45}
     );
      
  const marker = new google.maps.Marker({
      position: {lat: location[imageIndex].lat, lng: location[imageIndex].lng },
      map: map,}
  );
  
   const infowindow = new google.maps.InfoWindow({
    content: location[imageIndex].contentString,
  });

   marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  const container = document.getElementById('container');
  const imageContainer = document.getElementById('random-image-container');
  // Remove the previous image.
  if(container.lastElementChild == a){
    container.removeChild(container.lastElementChild);

}
  imageContainer.innerHTML = '';
  imageContainer.appendChild(imgElement);
  
  container.appendChild(mapElement)
  a = mapElement

}



