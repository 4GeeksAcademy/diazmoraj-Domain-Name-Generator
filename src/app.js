/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".us"];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getDomain(domain) {
    let max = domain.length;
    let min = 0;
    let random = getRandom(min, max);
    return domain[random];
  }

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getDomain(pronoun) + getDomain(adj) + getDomain(noun) + getDomain(domain);
};
