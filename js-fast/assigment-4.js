// .. Problem Solving-1 (radianToDegree)..
function radianToDegree(radian) {
   // The value of PI is calculated
   const pi = Math.PI;
   let formula = radian * (180 / pi);
   // Type check and add to fixed value 
   if (typeof (radian) == 'number') {
      let degreeValue = formula.toFixed(2);
      return degreeValue;
   } else {
      return ('Please Input Only Number Value. EX: radianToDegree(99)');
   }
}

// .. Problem Solving-2 (isJavaScriptFile)..
function isJavaScriptFile(fileFormat) {
   // File Type check Only String. 
   if (typeof (fileFormat) == 'string') {
      let fileNameSplit = fileFormat.split('.');
      // Only upper case to lower case formation last index EX: JS to js.
      let convertToLowerCase = fileNameSplit[fileNameSplit.length - 1].toLocaleLowerCase();
      // Check only js file name 
      let searchFileFormat = convertToLowerCase.includes('js');
      if (searchFileFormat) {
         return true;
      } else if (searchFileFormat !== '.js') {
         return false;
      } else {
         return false;
      }
   } else {
      return ("Please Input Only String value And file format .js. Ex:('index.js')");
   }

}

// .. Problem Solving-3 (oilPrice)..
function oilPrice(diesel, petrol, octane) {
   // 3 Oil Price Define
   const parLiterDieselTk = 114;
   const parLiterPetrolTk = 130;
   const parLiterOctaneTk = 135;
   // Check Only Number Value
   if (typeof (diesel) == 'number' && typeof (petrol) == 'number' && typeof (octane) == 'number') {
      let TotalDieselPrice = parLiterDieselTk * diesel;
      let TotalPetrolPrice = parLiterPetrolTk * petrol;
      let TotalOctanePrice = parLiterOctaneTk * octane;
      // Total Oil Price Plus
      let totalOilPrice = TotalDieselPrice + TotalPetrolPrice + TotalOctanePrice;
      return totalOilPrice;
   } else {
      return ('Please Input Only Number Value. EX:(1,2,3)');
   }
}

// .. Problem Solving-4 (publicBusFare)..
function publicBusFare(numberOfPeople) {
   const busPickUp = 50;
   const microPickUp = 11;
   const perPublicBusFare = 250;
   if (typeof (numberOfPeople) == 'number') {
      //Point values are count below
      let totalBus = Math.floor(numberOfPeople / busPickUp);
      // bus pickup people define
      let busPickUpPeople = busPickUp * totalBus;
      // After going to the bus, the rest of the people
      let restPeople = numberOfPeople - busPickUpPeople;
      let totalMicro = Math.floor(restPeople / microPickUp);
      // micro pickup people define
      let microPickUpPeople = microPickUp * totalMicro;
      let endRestPeople = restPeople - microPickUpPeople;
      // public bus cost define
      let totalPublicBusFare = endRestPeople * perPublicBusFare;
      return totalPublicBusFare;
   } else {
      return ('Please Input Only Number Value. EX: publicBusFare(50)');
   }
}

// .. Problem Solving-5 (isBestFriend)..
function isBestFriend(friendOne, friendTwo) {
   // Check Value Only Object.
   if (typeof (friendOne) == 'object' && typeof (friendTwo) == 'object') {
      // compare friendOne and FriendTwo name and friend name
      if (friendOne.name == friendTwo.friend && friendOne.friend == friendTwo.name) {
         return true;
      } else if (typeof (friendOne.name) != 'string' || typeof (friendTwo.name) != 'string') {
         // inner Object value only string check
         return ('Number Value Not Allow, Only String. EX- name: "sanu"');
      } else {
         return false;
      }
   } else if (typeof (friendOne) == 'string' || typeof (friendTwo) == 'string') {
      return ('String Value not allow');
   } else {
      return ('Only Object value define');
   }
}

function sum(i) {
   if (i == 1) {
      return 1;
   }
   return i + sum(i - 1);
}
const result = sum(5);
console.log(result)