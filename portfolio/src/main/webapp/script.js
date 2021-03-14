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
        {lat: 39.9514829982124, lng: 32.82864193896349 },
        {lat:-0.6182972019850904, lng:73.09703007580428 },
        {lat: 24.470814082528822, lng: 39.617508263244964 },
        {lat: 36.10039521673435, lng: -112.11208148905413 },
        {lat: 37.76768251244913, lng: -122.43029199523379 },
        {lat: 35.06307913148578, lng: 135.74217581612047 },
        {lat: 41.00549054415733, lng: 28.976631407284994 },
        {lat: 35.63599072424489, lng:139.63997813974325 },
        {lat: 6.520748303489362, lng: 3.3560439057592677 },
        {lat: 35.06307913148578, lng: 135.74217581612047 },
        {lat: 1.3675398068198992, lng: 103.8737622961487}
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
      {center: {lat: location[imageIndex].lat, lng: location[imageIndex].lng }, zoom: 10});
      
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



