import {getData} from "./utils.js";
export const projects=()=>{
    getData("https://raw.githubusercontent.com/Roland141/json/main/jsonfile",renderProjects)
}
function renderProjects(data){
    console.log(data);
}