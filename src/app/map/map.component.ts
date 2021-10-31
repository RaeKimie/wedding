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
