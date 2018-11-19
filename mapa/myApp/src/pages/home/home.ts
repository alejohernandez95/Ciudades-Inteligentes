import { Component } from '@angular/core';
import { NavController, Icon } from 'ionic-angular';
import { Provedor1Provider } from '../../providers/provedor1/provedor1';
import {//cameraposition
   GoogleMaps, GoogleMap, Environment, MyLocationOptions, 
   LocationService, MyLocation, Marker
} from '@ionic-native/google-maps'
import { Subscriber } from 'rxjs/Subscriber';
import { Subject, SubjectSubscriber, AnonymousSubject } from 'rxjs/Subject';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  
  map: GoogleMap;
  sensor
  
/////////////////////////////////////////////////////////////
  loadmap() {
    Environment.setEnv({
      'API_KEY_FOR_BOWSER_RELEASE': '',
      'API_KEY_FOR_BOWSER_DEBUG': '',
    });
    this.map = GoogleMaps.create('map_canvas');
    ////////////////se crean las marcas 
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.3545,
        lng:-76.573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    //////////////////////////1/////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.354735,
        lng:-76.5573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////////2////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.3545,
        lng:-76.523573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    ////////////////////////////3///////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.354735,
        lng:-76.5273,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////4/////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.35435,
        lng:-76.523573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////5////////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.354735,
        lng:-76.52573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    ///////////////////////6///////////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.354735,
        lng:-76.52573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
        //////////////////////////7/////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.35473,
            lng:-76.523573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////////8////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.354735,
            lng:-76.52373,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        ////////////////////////////9///////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.3545,
            lng:-76.5273,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////10/////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.353,
            lng:-76.3573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////11////////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.3545,
            lng:-76.5273,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        ///////////////////////12///////////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.35473,
            lng:-76.253,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
     //////////////////////////13/////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.35735,
        lng:-76.53573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////////14////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.5435,
        lng:-76.52353,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    ////////////////////////////15///////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.5475,
        lng:-76.5257,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////16/////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.35473,
        lng:-76.23573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    /////////////////////////17////////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.35475,
        lng:-76.52573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    ///////////////////////18///////////////////////
    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'red',
      animation: 'DROP',
      position: {
        lat:3.35735,
        lng:-76.53573,
      }
    }).then((Marker:Marker)=>{
      Marker.showInfoWindow()
    });
    ////////////////////////////////////////////////////
        //////////////////////////19/////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.54735,
            lng:-76.23573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////////20////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.35475,
            lng:-76.523573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        ////////////////////////////21///////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.35475,
            lng:-76.52353,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////22/////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.35475,
            lng:-76.52353,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        /////////////////////////23////////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.354735,
            lng:-76.5573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        ///////////////////////24///////////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.3735,
            lng:-76.523573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });
        ///////////////////////25///////////////////////
        this.map.addMarker({
          title: '@ionic-native/google-maps',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat:3.355735,
            lng:-76.523573,
          }
        }).then((Marker:Marker)=>{
          Marker.showInfoWindow()
        });


    let option:MyLocationOptions={
     enableHighAccuracy:true};
     LocationService.getMyLocation(option).then((location: MyLocation)=>{
       this.map.addMarker({
      
        title: 'posision actual',
        icon: 'blue',
        animation: 'DROP',
        position: location.latLng,
        
       })
       
       
     })
     .catch((error:any)=>{
       console.log(error);
     });
  }
  
  constructor(public navCtrl: NavController, public provedor:Provedor1Provider) {
   
  }
  ionViewDidLoad(){
    this.loadmap();
    this.provedor.obtenerDatos();
    //.subscriber(
      //(data)=>{this.sensor=data;},
      //(error)=>{console.log(error);},
    //)
  }

}
