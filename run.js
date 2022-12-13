fs = require('fs');

//  --> type slugs, e.g. "/contact/","/",  <--
let slug = [                                                    
                                                        
];                                                              
                                             

// --> type class or id to remove, like that: '".example-class","#example-id"' <--

let removeClass = " ";     
// -->  referenceURL - first screenshots <--
let referenceUrl = " ";

// -->  comparisonURL - second, comparison screenshots <--
let comparisonUrl = " ";  

// --> put delay between screenshots
let delay = 7000;        

// -->  put your test/file name - e.g "google.com STG - PRD" <--
let testName = " ";                                             


// --> nothing important <--
let tableUrl = [];
let tableReference = [];
let box = "";
// --> nothing important <--

for (let i = 0; i < slug.length; i++) {

  tableReference.push(referenceUrl + "" + slug[i]);

  tableUrl.push(comparisonUrl + "" + slug[i]);

}

function ifComma (indeks,lenght_slug) {

  let score;

  if(indeks === lenght_slug-1){

    score = "";

  }
  else {

    score = ",";

  }

  return score;

}

for (let i = 0; i < tableReference.length; i++) {
  
  let comment = `{

      "label": "BackstopJS Homepage ${i} ",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "${tableUrl[i]}",
      "referenceUrl": "${tableReference[i]}",
      "readyEvent": "",
      "readySelector": "",
      "delay": ${delay},
      "hideSelectors": [],
      "removeSelectors": [${removeClass}],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true

    } ${ifComma(i,tableReference.length)} `;

  box += comment;

}

let backstop = 

`{
    "id": "${testName}",
    "viewports": [
      {
        "label": "phone",
        "width": 320,
        "height": 480
      },
      {
        "label": "tablet",
        "width": 1025,
        "height": 768
      }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": [
      ${box}
    ],
    "paths": {
      "bitmaps_reference": "backstop_data/bitmaps_reference",
      "bitmaps_test": "backstop_data/bitmaps_test",
      "engine_scripts": "backstop_data/engine_scripts",
      "html_report": "backstop_data/html_report",
      "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
      "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
  }
`;


fs = require('fs');

fs.writeFile('backstop.json', backstop, function (err) {

  if (err) return console.log(err);

  console.log('Backstop.json has been edited');

});