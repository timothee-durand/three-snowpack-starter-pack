import {
  Group, Object3D,
} from 'three';
import helpers from "./helpers";


export default class Thing extends Group {



  constructor() {
    super();
    this.altitudeMax = undefined
    this.altitudeMin = undefined

  }

  setWorldPosition(earth, altitude, _phi, _theta) {
    const earthRadius = earth.earth.geometry.parameters.radius;
    const earthPerimeter = earthRadius * 2 * Math.PI
    let i = 3;
    let l = 1;
    const phi =  _phi ?? helpers.getRandBtw(0, earthPerimeter);
    const theta = _theta ?? helpers.getRandBtw(0, earthPerimeter);

    this.position.setFromSphericalCoords(  earthRadius + altitude, phi, theta);

    this.lookAt( earth.position );
    this.rotateX( -0.5*Math.PI );

  }



  update(timeStamp) {

  }


}
