var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
  mapOption = {
    center: new kakao.maps.LatLng(35.616676340373026, 127.28803576296183), // 지도의 중심좌표
    level: 13 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [{
    title: '인천공항',
    latlng: new kakao.maps.LatLng(37.44922252207683, 126.4515353189167)
  },
  {
    title: '김포공항',
    latlng: new kakao.maps.LatLng(37.559921437601524, 126.80246682790663)
  },
  {
    title: '제주공항',
    latlng: new kakao.maps.LatLng(33.50726107097914, 126.49331789961546)
  },
];
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

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

  // 커스텀 오버레이에 표시할 컨텐츠 입니다
  // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
  // 별도의 이벤트 메소드를 제공하지 않습니다 
  var content = '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            에어버스 시승장' +
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="logo">' +
    '                <img src="../img/airbus_logo.svg" width="73" height="70" max-width: "65px" background-color="#fff">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">에어버스 헬리콥터를 체험해보세요' +
    '                <div class="jibun ellipsis">Experience Airbus Helicopter</div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

  // 마커 위에 커스텀오버레이를 표시합니다
  // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
  var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()
  });

  // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
  kakao.maps.event.addListener(marker, 'click', function () {
    overlay.setMap(map);
  });

  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
  function closeOverlay() {
    overlay.setMap(null);
  }

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