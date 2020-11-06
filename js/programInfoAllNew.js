var ibccHref = [
    'blockchainCourse.html#fundamentalsTrack',
    'blockchainCourse.html#solutionsArchitectureTrack',
    'blockchainCourse.html#blockchainBusinessAndLegal'
];

var ibccTitleArr = [
    'Fundamentals Track',
    'Solutions Architecture Track',
    'Blockchain Business & Legal'
];
// ●
var ibccDescArr = [
    '● Introduction & Challenges <br> ● Blockchain Technology from First Principles <br>● Blockchain Business & Legal',
    '●  Blockchain Opportunities <br>● Identity & Privacy <br>●  Asset Tokenization & Digital Fiat',
    '●  Blockchain Governance <br>● Blockchain Solutions Architecture <br>●  Blockchain in Fintech'
];

var ibccImgArr = [
    './images/modules/temp.png',
    './images/modules/temp.png',
    './images/modules/temp.png'

];

var ibccRow = document.getElementById('ibccRow');

for (let i = 0; i < ibccDescArr.length; i++) {
    ibccRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + ibccImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + ibccHref[i] + '">' + ibccTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + ibccDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}










// data science
var dsHref = [
    'dataScienceCourse.html#epidemiologyTrack',
    'dataScienceCourse.html#juliaProgrammingTrack'
];

var dsTitleArr = [
    'Epidemiology Track',
    'Julia Programming Track'
];

var dsDescArr = [
    '● Introduction to Epidemiology <br>● Infectious Disease Modeling <br>● Advanced Mathematical Models and Case Studies <br>● Parameter Estimation Techniques',
    '● Introduction to Julia <br>● Introduction to Control Flow in Julia <br>● Advanced Programming Concepts in Julia <br>● Data Science in Julia'
];
var dsImgArr = [
    './images/modules/temp.png',
    './images/modules/temp.png'
];

var dsRow = document.getElementById('dsRow');

for (let i = 0; i < dsDescArr.length; i++) {
    dsRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + dsImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + dsHref[i] + '">' + dsTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + dsDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}







// fintech
var ftHref = [
    'fintechCourse.html#securityPricing',
    'fintechCourse.html#portfolioManagement',
    'fintechCourse.html#algorithmicTradingStrategies'
];

var ftTitleArr = [
    'Quantitative Finance: Security Pricing',
    'Quantitative Finance: Portfolio Management ',
    'Quantitative Finance: Algorithmic Trading Strategies '
];


var ftDescArr = [
    '● Introduction to Basic Fixed Income Securities  <br>●  Introduction to Derivative Securities  <br>● Option Pricing in the Multi-Period Binomial Model <br>● Term Structure Models I   <br>● Term Structure Models II and Introduction to Credit Derivatives ',
    '● General Introduction and Key Concepts  <br>●  Modern Portfolio Theory and Beyond  <br>●  Asset Allocation  <br>●  Risk Management',
    '●  Introduction to Algorithmic Trading  <br>● Mean Reversion  <br>● Ensemble Methods <br>● Snooping and Bad Science'
];

var ftImgArr = [
    './images/modules/temp.png',
    './images/modules/temp.png',
    './images/modules/temp.png'
];

var ftRow = document.getElementById('fintechRow');

for (let i = 0; i < ftTitleArr.length; i++) {
    ftRow.innerHTML += (
        '<div class="col-4 bgWhite rowFrame mediaControl_ChangeToCol12">' +
        '<div class="row paddingForCourseFrame">' +
        '<div class="col-3 paddingForCourseIcons">' +
        '<img src="' + ftImgArr[i] + '" class="courseIcons">' +
        '</div>' +
        '<div class="col-9 paddingForCourseInfo">' +
        '<div class="courseName sectionMainFontFamily fontSize16">' +
        '<a href="' + ftHref + '">' + ftTitleArr[i] + '</a>' +
        '</div>' +
        '<div class="fontSize12 courseDesc sectionMainFontFamilyThin  ">' + ftDescArr[i] + ' </div>' +
        '</div>' +
        '</div>' +
        '</div>');
}