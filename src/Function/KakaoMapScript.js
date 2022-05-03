import imageSrc from "../Image/MapIcon.png"; // 마커이미지의 주소입니다

const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.539756551501, 127.12334722550108),
    level: 2,
  };
  const map = new kakao.maps.Map(container, options);

  const imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
  const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

  var markerPosition = new kakao.maps.LatLng(
    37.539756551501,
    127.12334722550108
  );
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}
