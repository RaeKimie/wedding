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

  public places = [
    { name: '공대2호관 쪽문나가는길', lat: 36.363775, lon: 127.346709 },
  ];

  constructor() { }

  ngOnInit(): void {
            // 살짝 딜레이 줘야 화면에 맵에 쪽바로 그려진다.
            setTimeout(() => {
              const options = {
                  center: new kakao.maps.LatLng(36.370546, 127.345966),
                  level: 3
              };
  
              this.map = new kakao.maps.Map(document.getElementById('map'), options);
  
              this.infowindow = new kakao.maps.InfoWindow({
                  map: this.map,
                  zIndex: 4,
                  position: new kakao.maps.LatLng(36.370546, 127.345966),
                  removable: true
              });
  
              this.addPlaces();
          }, 300);
  }

  public addPlaces() {
    this.places.forEach(place => {
        const image = new kakao.maps.MarkerImage(
            'assets/img/marker.png',
            new kakao.maps.Size(64, 69),
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
