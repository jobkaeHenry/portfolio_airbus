var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
  mapOption = {
    center: new kakao.maps.LatLng(35.616676340373026, 127.28803576296183), // 지도의 중심좌표
    level: 13 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [{
    title: '인천공항 체험장',
    latlng: new kakao.maps.LatLng(37.44922252207683, 126.4515353189167)
  },
  {
    title: '김포공항 체험장',
    latlng: new kakao.maps.LatLng(37.559921437601524, 126.80246682790663)
  },
  {
    title: '제주공항 체험장',
    latlng: new kakao.maps.LatLng(33.50726107097914, 126.49331789961546)
  },
];
var imageSrc = "../img/pin.png";

for (var i = 0; i < positions.length; i++) {

  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다    
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage // 마커 이미지 
  });

  

}
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}