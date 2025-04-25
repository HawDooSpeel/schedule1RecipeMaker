// preset names
var preset1Name = ["OG","sour","green","grand","me","coke","cuke","banana","pmol","donut","vig","mouthWash","flu","gas","energy","oil","been","chili","battery","iodine","ad","horse"];
var preset2Name = ["milk","salt","eggs","sugar","hotdog"];
//preset effects
var preset1Effect = ["calming","refreshing","energizing","sedating","none","none","energizing","gingeritis","sneaky","calDense","tropicThunder","balding","sedating","toxic","athletic","slippery","foggy","spicy","brightEyed","jenn","thoughtProvoking","longFaced","antiGravity","brightEyed","cyclopean","disorienting","electrifying","euphoric","explosive","focused","glowing","munchies","paranoia","refreshing","schizophrenic","seizureInducing","shrinking","smelly","zombifying", "laxative"];
var preset2Effect = ["lactosintolerance","salty","brekfast","sweet","hotdog O:"];
//preset rules
var preset2Rules = "milk,salt,sweet,eggs,hotdog O:,lactosintolerance,false,false";
//var preset1Rules = "banana,pmol,mouthWash,oil,coke,coke,pmol,pmol,pmol,energy,pmol,vig,flu,chili,pmol,vig,flu,gas,been,horse,battery,coke,been,been,gas,been,energy,been,energy,ad,horse,donut,been,energy,ad,coke,donut,flu,gas,energy,chili,battery,ad,donut,banana,gas,been,flu,gas,donut,pmol,flu,iodine,ad,vig,gas,been,battery,banana,mouthWash,cuke,energy,been,chili,coke,flu,energy,oil,battery,coke,pmol,flu,been,iodine,banana,flu,chili,ad,horse,oil,oil,iodine,mouthWash,gas,oil,banana,iodine,energy,pmol,donut,flu,banana,gas,banana,donut,vig,mouthWash,gas,energy,iodine,gas,gas,coke,banana,banana,iodine,pmol,vig,chili,been,oil,flu,pmol,gas,chili,battery,battery,smelly,munchies,calming,paranoia,munchies,slippery,electrifying,paranoia,energizing,schizophrenic,spicy,euphoric,calming,sneaky,foggy,laxative,focused,paranoia,sneaky,antiGravity,laxative,foggy,thoughtProvoking,energizing,electrifying,focused,glowing,shrinking,disorienting,longFaced,thoughtProvoking,shrinking,thoughtProvoking,euphoric,foggy,toxic,focused,laxative,energizing,spicy,athletic,electrifying,explosive,calDense,disorienting,shrinking,seizureInducing,cyclopean,laxative,jenn,focused,thoughtProvoking,calDense,sedating,shrinking,disorienting,calming,cyclopean,paranoia,focused,euphoric,foggy,athletic,laxative,slippery,athletic,sedating,energizing,shrinking,sneaky,energizing,shrinking,jenn,foggy,longFaced,longFaced,shrinking,glowing,gingeritis,energizing,munchies,calming,explosive,munchies,euphoric,focused,euphoric,focused,calming,antiGravity,munchies,toxic,gingeritis,calming,balding,athletic,calDense,jenn,tropicThunder,toxic,energizing,euphoric,gingeritis,cyclopean,energizing,refreshing,glowing,disorienting,munchies,slippery,foggy,euphoric,toxic,sneaky,antiGravity,antiGravity,euphoric,antiGravity,antiGravity,antiGravity,antiGravity,athletic,athletic,athletic,balding,balding,balding,brightEyed,brightEyed,brightEyed,brightEyed,calming,calming,calming,calming,calming,calming,calDense,cyclopean,cyclopean,cyclopean,disorienting,disorienting,disorienting,electrifying,electrifying,electrifying,electrifying,energizing,energizing,energizing,energizing,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,explosive,focused,focused,focused,foggy,foggy,gingeritis,gingeritis,gingeritis,gingeritis,gingeritis,gingeritis,glowing,glowing,glowing,jenn,jenn,laxative,laxative,laxative,longFaced,munchies,munchies,munchies,munchies,munchies,paranoia,paranoia,paranoia,paranoia,paranoia,refreshing,refreshing,refreshing,refreshing,refreshing,schizophrenic,schizophrenic,sedating,sedating,sedating,sedating,seizureInducing,seizureInducing,shrinking,slippery,slippery,slippery,smelly,smelly,sneaky,sneaky,sneaky,sneaky,sneaky,sneaky,sneaky,spicy,spicy,thoughtProvoking,thoughtProvoking,thoughtProvoking,thoughtProvoking,toxic,toxic,toxic,toxic,toxic,toxic,tropicThunder,tropicThunder,tropicThunder,tropicThunder,zombifying";
var preset1Rules = "banana,pmol,mouthWash,oil,coke,coke,pmol,pmol,pmol,energy,pmol,vig,flu,chili,pmol,vig,flu,gas,been,horse,battery,coke,been,been,gas,been,energy,been,energy,ad,horse,donut,been,energy,ad,coke,donut,flu,gas,energy,chili,battery,ad,donut,banana,gas,been,flu,gas,donut,pmol,flu,iodine,ad,vig,gas,been,battery,banana,mouthWash,cuke,energy,been,chili,coke,flu,energy,oil,battery,coke,pmol,flu,been,iodine,banana,flu,chili,ad,horse,oil,oil,iodine,mouthWash,gas,oil,banana,iodine,energy,pmol,donut,flu,banana,gas,banana,donut,vig,mouthWash,gas,energy,iodine,gas,gas,coke,banana,banana,iodine,pmol,vig,chili,been,oil,flu,pmol,gas,chili,battery,battery,smelly,munchies,calming,paranoia,munchies,slippery,electrifying,paranoia,energizing,schizophrenic,spicy,euphoric,calming,sneaky,foggy,laxative,focused,paranoia,sneaky,antiGravity,laxative,foggy,thoughtProvoking,energizing,electrifying,focused,glowing,shrinking,disorienting,longFaced,thoughtProvoking,shrinking,thoughtProvoking,euphoric,foggy,toxic,focused,laxative,energizing,spicy,athletic,electrifying,explosive,calDense,disorienting,shrinking,seizureInducing,cyclopean,laxative,jenn,focused,thoughtProvoking,calDense,sedating,shrinking,disorienting,calming,cyclopean,paranoia,focused,euphoric,foggy,athletic,laxative,slippery,athletic,sedating,energizing,shrinking,sneaky,energizing,shrinking,jenn,foggy,longFaced,longFaced,shrinking,glowing,gingeritis,energizing,munchies,calming,explosive,munchies,euphoric,focused,euphoric,focused,calming,antiGravity,munchies,toxic,gingeritis,calming,balding,athletic,calDense,jenn,tropicThunder,toxic,energizing,euphoric,gingeritis,cyclopean,energizing,refreshing,glowing,disorienting,munchies,slippery,foggy,euphoric,toxic,sneaky,antiGravity,antiGravity,euphoric,antiGravity,antiGravity,antiGravity,antiGravity,athletic,athletic,athletic,balding,balding,balding,brightEyed,brightEyed,brightEyed,brightEyed,calming,calming,calming,calming,calming,calming,calDense,cyclopean,cyclopean,cyclopean,disorienting,disorienting,disorienting,electrifying,electrifying,electrifying,electrifying,energizing,energizing,energizing,energizing,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,euphoric,explosive,focused,focused,focused,foggy,foggy,gingeritis,gingeritis,gingeritis,gingeritis,gingeritis,gingeritis,glowing,glowing,glowing,jenn,jenn,laxative,laxative,laxative,longFaced,munchies,munchies,munchies,munchies,munchies,paranoia,paranoia,paranoia,paranoia,paranoia,refreshing,refreshing,refreshing,refreshing,refreshing,schizophrenic,schizophrenic,sedating,sedating,sedating,sedating,seizureInducing,seizureInducing,shrinking,slippery,slippery,slippery,smelly,smelly,sneaky,sneaky,sneaky,sneaky,sneaky,sneaky,sneaky,spicy,spicy,thoughtProvoking,thoughtProvoking,thoughtProvoking,thoughtProvoking,toxic,toxic,toxic,toxic,toxic,toxic,tropicThunder,tropicThunder,tropicThunder,tropicThunder,zombifying,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false";
//these are for calculating the price
var startingPrice = [35, 35, 35, 35, 1, 1];
var effectPrice = [0.1, 0.14, 0.22, 0.26, 0,0, 0.22, 0.2,0.24,0.28,0.46,0.3,0.26,0,0.32,0.34,0.36,0.38,0.4,0.42,0.44,0.52,0.54,0.4,0.56,0,0.5,0.18,0,0.16,0.48,0.12,0,0.14,0,0,0.6,0,0.58,0];
//list of avalible names
var name=[];
//list of avalible effects
var effect=[];
// currently picked ingrident number
var ingrident;
// currently active effects
var activeEffects=[];
// order of ingredients added
var recipe=[];
//stores a saved recipe
var savedRecipes=[];
//var savedNames = [];
//rules for what is being added
var additionRules=[];
//rules for what is already in the mix
var prexistingRules=[];
//the effect of a rule
var ruleEffect=[];
//allows for some rules to be exclusive (rules with a lower ID wont get checked)
//true means it is exclusive false means it isnt
var isExlusive = [];
//for viewing and removeing rules
var ruleID=0;
//stores what effect is going to happen so it can be diplayed 
var effectToRemove;
var effectToAdd;
setProperty("ruleOption1", "options", ["OG","sour","green","grand","me","coke","cuke","banana","pmol","donut","vig","mouthWash","flu","gas","energy","oil","been","chili","battery","iodine","ad","horse"]);
setProperty("ruleOption1", "options", ["OG","sour","green","grand","me","coke","cuke","banana","pmol","donut","vig","mouthWash","flu","gas","energy","oil","been","chili","battery","iodine","ad","horse"]);
name = preset1Name;
effect = preset1Effect;
inporter(preset1Rules, true, false);
allRefresh();
//main screen buttons
onEvent("restartButton", "click", function( ) {
  recipe = [];
  activeEffects = [];
  allRefresh();
});
onEvent("addButton", "click", function( ) {
  itemAdder(true, getProperty("itemSelect", "index"));
  allRefresh();
  playSound("assets/category_bell/hollow_bell_notification.mp3", false);
});
onEvent("priceButton", "click", function( ) {
  var price;
  var sumValue=1;
  for (var i = 0; i < recipe.length; i++) {
    sumValue = sumValue+effectPrice[(preset1Effect.indexOf(activeEffects[i]))];
    console.log(sumValue);
  }
  price = startingPrice[(preset1Name.indexOf(recipe[0]))]*sumValue;
  setText("priceView", "price estimate: "+price);
});
onEvent("itemSelect", "change", function( ) {
  mainRefresh();
});
onEvent("exitButton", "click", function( ) {
  setScreen("start");
});
onEvent("saveButton", "click", function( ) {
  savedRecipes=recipe;
  //appendItem(savedNames, getText("recipeName"));
  recipe = [];
  activeEffects=[];
  allRefresh();
});
onEvent("loadButton", "click", function( ) {
  for (var i = 0; i < savedRecipes.length-1; i++) {
    itemAdder(true, preset1Name.indexOf(savedRecipes[i]));
  }
  allRefresh();
});
//start buttons
onEvent("presetSelect", "click", function( ) {
  var index = getProperty("presetSelect", "index");
  if (index==0) {
    name = preset1Name;
    effect = preset1Effect;
    inporter(preset1Rules, true, false);
    showElement("priceView");
    showElement("priceButton");
  } else {
    name = preset2Name;
    effect = preset2Effect;
    inporter(preset2Rules, true, false);
    hideElement("priceView");
    hideElement("priceButton");
  }
  allRefresh();
});
onEvent("upButton", "click", function( ) {
  ruleViewer(1);
});
onEvent("downButton", "click", function( ) {
  ruleViewer(-1);
});
onEvent("reomoveButton", "click", function( ) {
  removeItem(additionRules, ruleID);
  removeItem(prexistingRules, ruleID);
  removeItem(ruleEffect, ruleID);
});
onEvent("startButton", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("ruleAdd", "click", function( ) {
  appendItem(additionRules, getText("ruleOption1"));
  appendItem(prexistingRules, getText("ruleOption2"));
  appendItem(ruleEffect, getText("ruleOption3"));
  if (getChecked("isExlusiveCheck")) {
    appendItem(isExlusive, true);
  } else {
    appendItem(isExlusive, false);
  }
  ruleID = isExlusive.length;
  ruleRefresh();
  playSound("assets/category_bell/hollow_bell_notification.mp3", false);
  
});
onEvent("ruleOption1", "change", function( ) {
  ruleRefresh();
});
onEvent("ruleOption2", "change", function( ) {
  ruleRefresh();
});
onEvent("ruleOption3", "change", function( ) {
  ruleRefresh();
});
onEvent("inportButton", "click", function( ) {
  name = [];
  effect = [];
  inporter(getText("PresetInport"), false, true);
});
onEvent("ruleImportButton", "click", function( ) {
  additionRules = [];
  prexistingRules = [];
  ruleEffect = [];
  inporter(getText("ruleInport"), true);
});
onEvent("exportMenuButton", "click", function( ) {
  setScreen("exportMenu");
  exportRefresh();
});
//export menu
onEvent("backButton", "click", function( ) {
  setScreen("start");
});
onEvent("helpButton", "click", function( ) {
  if (getProperty("nameAndEffectGuide", "hidden")) {
    hideElement("rulesHelpButton");
    showElement("nameAndEffectGuide");
  } else {
    showElement("rulesHelpButton");
    hideElement("nameAndEffectGuide");
  }
});
onEvent("rulesHelpButton", "click", function( ) {
  if (getProperty("ruleGuide", "hidden")) {
    hideElement("helpButton");
    showElement("ruleGuide");
  } else {
    showElement("helpButton");
    hideElement("ruleGuide");
  }
});



//allows for the importing of rules names and effects
//inportedText (string) the string to inport
//ruleInport (boolean) allows inporting rules
//presetInport (boolean) allows inporting of a preset
function inporter(inportedText, RuleInport, PresetInport) {
  var useableLength;
  var unfilteredEffects;
  var filteredEffects=[];
  var unfilteredStartingPrices = [];
  var startingPrices = [];
  //very complicated but it allows for a user to easily import everything
  if (PresetInport) {
    unfilteredEffects = inportedText.substring(inportedText.indexOf("EFFECTSTART")+11, inportedText.length+1);
    inportedText = inportedText.substring(0, inportedText.indexOf("EFFECTSTART"));
    unfilteredStartingPrices = inportedText.substring(inportedText.indexOf("STARTINGPRICESTART")+18, inportedText.length+1);
    inportedText = inportedText.substring(0, inportedText.indexOf("STARTINGPRICESTART"));
    startingPrices = importFilter(unfilteredStartingPrices);
    filteredEffects = importFilter(unfilteredEffects);
  }
  var newPreset=importFilter(inportedText);
  useableLength = filteredEffects.length/2;
  if (PresetInport) {
    for (var i = 0; i < newPreset.length; i++) {
      appendItem(name, newPreset[i]);
    }
    for (var i = 0; i < useableLength; i++) {
      appendItem(effect, filteredEffects[i]);
      appendItem(effectPrice, filteredEffects[i+useableLength]);
    }
    for (var i = 0; i < startingPrices.length; i++) {
      appendItem(startingPrice, startingPrices[i]);
    }
  }
  if (RuleInport) {
    useableLength=newPreset.length/4;
    for (var i = 0; i < useableLength; i++) {
      appendItem(additionRules, newPreset[i]);
      appendItem(prexistingRules, newPreset[(i+useableLength)]);
      appendItem(ruleEffect, newPreset[(i+useableLength*2)]);
      appendItem(isExlusive, newPreset[(i+useableLength*3)]);
    }
  }
  allRefresh();
}

//allows for the conversion of a properly formatted string to a list 
//importedText (string) the string to be converted
//returns the converted text as a list
function importFilter(importedText) {
   var filterdImport = [];
  while ((importedText.includes(","))) {
    appendItem(filterdImport, importedText.substring(0, importedText.indexOf(",")));
    importedText = importedText.substring(importedText.indexOf(",")+1, importedText.length);
  }
  appendItem(filterdImport, importedText);
   return filterdImport;
}

//refreshes all screens and item names
function allRefresh() {
  //ran into some bugs with these getting changed to frequently
  setProperty("itemSelect", "options", name);
  setProperty("ruleOption1", "options", name);
  setProperty("ruleOption2", "options", effect);
  setProperty("ruleOption3", "options", effect);
  
  mainRefresh();
  ruleRefresh();
  exportRefresh();
}

//refreshes the export screen
function exportRefresh() {
  setText("presetExport", (((name+"STARTINGPRICESTART")+startingPrice)+"EFFECTSTART")+effect+","+effectPrice);
  setText("rulesExport", (additionRules+",")+prexistingRules+","+ruleEffect+","+isExlusive);
}
//refreshes the start/rule screen
function ruleRefresh() {
  setText("rulePreview",("if "+getText("ruleOption1"))+" is added to " +getText("ruleOption2")+" then "+getText("ruleOption3"));
  setText("ruleViewer", ((("if "+additionRules[ruleID])+" is added to " +prexistingRules[ruleID])+" then "+ruleEffect[ruleID]+"\n"+"is exclusive? ")+isExlusive[ruleID]);
  setText("reomoveButton", "remeove rule #"+(ruleID+1));
}
//refreshes the main screen
function mainRefresh() {
  var displayEffects="";
  ingrident=getProperty("itemSelect", "index");
  //allows retrevial of what will be added
  itemAdder(false, getProperty("itemSelect", "index"));
  //checks is there is a new special effect being added
  if (effectToAdd!=null&&activeEffects.indexOf(effectToAdd)!=0) {
    setText("effectPreview", (effectToAdd+"\n")+effect[ingrident]);
    //prevents effects from getting "stuck" in the effect viewer
    effectToAdd = null;
  } else {
    setText("effectPreview", effect[ingrident]);
  }
  for (var i = 0; i < activeEffects.length; i++) {
    displayEffects = (displayEffects)+activeEffects[i]+", ";
  }
  setText("effectView", displayEffects);
  //setProperty("recipeSelect", "options", savedNames);
  setText("recipeView", "recipe:"+"\n"+recipe);
}
//changes the rule being displayed
//ID (number) the amount to change the displayed ID by
//to increase just put the number to decrease use a negative number
function ruleViewer(ID) {
  if ((ruleID + ID >= 0)&&(ruleID+ID) <= (ruleEffect.length-1)) {
    ruleID = ruleID+ID;
  }
  //prevents the rule viewer getting stuck outt of bounds
  if (ruleID<0||ruleID>ruleEffect.length-1) {
    ruleID = 0;
  }
  ruleRefresh();
}




//adds items and effects or previews what effects will be added
//overWrite (boolean) wether or not you want to change the recipy use false to preview
//ingrident (number) the location of the item being added
function itemAdder(overWrite, ingrident) {
  var check;
  appendItem(recipe, name[ingrident]);
  appendItem(activeEffects, effect[ingrident]);
  for (var I = 0; I < prexistingRules.length; I++) {
    if (recipeRules(additionRules[I], prexistingRules[I], ruleEffect[I])&&overWrite) {
      removeItem(activeEffects, effectToRemove);
      appendItem(activeEffects, effectToAdd);
      if (isExlusive[I]) {
        I = prexistingRules.length;
      }
    }
  }
  //it is unable to preview what effects are added properly if it doesn't change these
  if (!overWrite) {
    removeItem(recipe, recipe.length-1);
    removeItem(activeEffects, activeEffects.length-1);
  }
  //stops multipul of the same effect being added
  if (overWrite) {
    for (var i = 0; i < activeEffects.length; i++) {
      if (activeEffects[i]==effect[ingrident]) {
        if (check) {
          removeItem(activeEffects, i);
        } else {
          check = true;
        }
      }
    }
  }
}
// item (string) ingredient being added
// effect (string) pre-exesting effect
// result (string) the effect to replace effect B
//checks all rules and allows for the application of effects
//changes effectToAdd and effectToRemove so effects can be added and removed or so they can be previewed
function recipeRules(item,effect,result) {
  var Check;
  var location;
  //checks to see if the preexisting effect is in the mix
  for (var i = 0; i < activeEffects.length-1; i++) {
    if (activeEffects[i]==effect) {
      Check=true;
      location = i;
      i = activeEffects.length;
      
    }
  }
  if (Check != true||item!=name[ingrident]) {
    return false;
  } else {
    effectToRemove = location;
    effectToAdd = result;
    return true;
  }
  
}
