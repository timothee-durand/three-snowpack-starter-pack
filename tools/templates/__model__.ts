import {
  Geometry,
  Mesh,
  MeshPhongMaterial,
  Object3D,
  Vector3
} from 'three';
import helpers from "../helpers";
import params from "../../params";
import Thing from "../Thing";

export default class __model__ extends Thing {
  constructor(color) {
    super();
    console.log("__model__ CREATED")

    const geometry = new Geometry();
    const material = new MeshPhongMaterial({
      shininess : 0,
      reflectivity : 0,
      wireframe : params.wireframe,
      color : color
    })
    const mesh = new Mesh(geometry, material)

    this.add(mesh)
  }

  update(timeStamp) {

  }

}
