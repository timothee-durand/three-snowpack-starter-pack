import {
    BoxGeometry,
    Geometry,
    Mesh,
    MeshPhongMaterial,
    Object3D,
    Vector3
} from 'three';
import helpers from "../helpers";
import params from "../../params";
import Thing from "../Thing";

export default class Cube extends Thing {

  constructor() {
    super();
    console.log("Cube CREATED")

    const geometry = new BoxGeometry(10, 10, 10)
    const material = new MeshPhongMaterial({
      wireframe : params.wireframe,
      color : "#ff0000"
    })
    const mesh = new Mesh(geometry, material)

    this.add(mesh)
  }

  update(timeStamp) {

  }
}
