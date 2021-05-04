import {
    Color,
    CylinderGeometry, DoubleSide,
    Group,
    Mesh,
    MeshBasicMaterial,
    SphereGeometry
} from 'three';
import BasicLights from './Lights';
import helpers from "./helpers";
import params from "../params";
import Cube from "./Cube/Cube";

export default class SeedScene extends Group {


    constructor() {
        super();
        this.init()

        let regenerer = {
            REGENERER: () => {
                this.clear()
                this.init()
            }
        }

        helpers.addButtonToGUI(regenerer, "REGENERER");
    }

    update(timeStamp) {
        this.rotation.y = timeStamp / 10000;
    }

    init() {
        const lights = new BasicLights();
        this.add(lights);

        const cube = new Cube();
        this.add(cube)
    }

    setHelper() {
        const geometry = new SphereGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({color: 0xffff00, side: DoubleSide, wireframe: params.wireframe});
        const plane = new Mesh(geometry, material);
        this.add(plane);

        const x = new Mesh(new CylinderGeometry(1, 1, 200), material)
        const y = new Mesh(new CylinderGeometry(1, 1, 200), material)
        const z = new Mesh(new CylinderGeometry(1, 1, 200), material)

        x.rotation.x = Math.PI / 2
        x.material = material.clone()
        x.material.color = new Color(255, 255, 255)
        y.rotation.y = Math.PI / 2
        y.material = material.clone()
        y.material.color = new Color(0, 0, 255)
        z.rotation.z = Math.PI / 2
        this.add(x, y, z)
    }
}
