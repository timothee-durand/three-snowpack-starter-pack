import * as dat from 'dat.gui';

const gui = new dat.GUI();

export default  {
  getRandBtw(min, max) {
    return  min + (Math.random() * (max-min));
  },

  getRandValue(array) {
    return array[Math.floor(this.getRandBtw(0, array.length))]
  },

  addStringToGUI(object, propertyName) {
    gui.add(object, propertyName)
  },

  addNumberToGUI(object, propertyName, min, max) {
    gui.add(object, propertyName, min, max)
  },

  addButtonToGUI(obj, methodName) {
    gui.add(obj,methodName);
  },

  addFolderToGUI(folderName) {
    return gui.addFolder(folderName);
  },

  log(name, values) {
    console.log(name, values)
  }
}
