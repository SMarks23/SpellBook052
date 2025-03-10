import{
    activeFeats,
    findActiveFeats,
    colorActiveFeats,
    colorInactiveFeats
} from './createFeats.js';

console.log(activeFeats);
if(activeFeats.length == 0){
    document.body.style.backgroundColor = "red";
}
