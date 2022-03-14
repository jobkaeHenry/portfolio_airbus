var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(36.29547788128749, 127.69572491745187), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
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