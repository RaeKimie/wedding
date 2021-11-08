import { Component, OnInit } from '@angular/core';
declare var kakao: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: any;
  public infowindow: any;
  public location = {
    name:'인천아시아드웨딩컨벤션',
    tel: '032-765-6000',
    address:'인천 서구 봉수대로 806',
    lat:37.549165,
    lon:126.667171
  }

  public details = [{name:'지하철이용시(셔틀버스 운행, 15분간격)', info:['1) 공항철도, 인천2호선 검암역 1번출구 횡단보도 건너편에서 승차', '2) 인천2호선 아시아드경기장역 3번출구 앞 승차']},
  {name:'버스이용시', info:['1)우성아파트 [42-717] : 24-1, 70, 111, 111B, 111C, 302, 302A, 310, 인천e음86', '2)우성아파트 [42-718] : 24-1, 595, 70, 111, 111B, 111C, 302, 302A, 302B, 308, 380A, 310, 인천e음86', '3)인천아시아드주경기장(동문) [89-354] : 3-2, 700-1, 인천e음86', '4)인천아시아드주경기장(동문) [89-359] : 3-2, 700-1, 인천e음86']},
  {name:'자가용 이용시', info:['1)네비게이션 : "아시아드웨딩컨벤션" 또는 "염곡로 725" 입력', '2)주차장 안내 : 인천아시아드주경기장 3번 게이트 앞 주차장 이용 (주차요금 무료)']}];

  public places = [
    { name: '인천아시아드웨딩컨벤션', lat: 37.549165, lon: 126.667171 },
  ];

  constructor() { }

  ngOnInit(): void {
            setTimeout(() => {
              const options = {
                  center: new kakao.maps.LatLng(37.549165, 126.667171),
                  level: 4
              };
  
              this.map = new kakao.maps.Map(document.getElementById('map'), options);
  
              this.infowindow = new kakao.maps.InfoWindow({
                  map: this.map,
                  zIndex: 4,
                  position: new kakao.maps.LatLng(37.549165, 126.667171),
                  removable: true
              });
  
              this.addPlaces();
          }, 300);
  }

  public addPlaces() {
    this.places.forEach(place => {
        const image = new kakao.maps.MarkerImage(
            '../../assets/icons/pin.png',
            new kakao.maps.Size(44, 47),
            { offset: new kakao.maps.Point(27, 69) }
        );

        const marker = new kakao.maps.Marker({
            clickable: true,
            position: new kakao.maps.LatLng(place.lat, place.lon),
            image
        });

        marker.setMap(this.map);

        // 클릭했을때 마커위에 인포윈도우 그리기
        kakao.maps.event.addListener(marker, 'click', () => {
            this.infowindow.setContent(`<div style="padding:5px;width:250px;">${place.name}</div>`);
            this.infowindow.open(this.map, marker);
        });

        this.infowindow.setContent(`<div style="padding:5px;width:250px;">${place.name}</div>`);
        this.infowindow.open(this.map, marker);
    });
}
}
