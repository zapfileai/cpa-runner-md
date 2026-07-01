const marylandCities = [
  "Dayton", "Deale", "Delmar", "Denton", "Derwood",
  "Dickerson", "District Heights", "Dundalk", "Dunkirk", "Earleville",
  "East New Market", "Easton", "Edgewater", "Edgewood", "Elkridge",
  "Elkton", "Ellicott City", "Emmitsburg", "Essex", "Fairplay",
  "Fallston", "Federalsburg", "Finksburg", "Flintstone", "Forest Hill",
  "Fork", "Fort Washington", "Frederick", "Freeland", "Friendship",
  "Friendsville", "Frostburg", "Fruitland", "Fulton", "Gaithersburg",
  "Galena", "Galesville", "Gambrills", "Garrett Park", "Germantown",
  "Gibson Island", "Glen Arm", "Glen Burnie", "Glen Echo", "Glenelg",
  "Glenn Dale", "Glenwood", "Glyndon", "Goldsboro", "Grantsville",
  "Grasonville", "Great Mills", "Greenbelt", "Gunpowder", "Gwynn Oak",
  "Hagerstown", "Halethorpe", "Hampstead", "Hanover", "Harwood",
  "Havre De Grace", "Hebron", "Highland", "Hollywood", "Hughesville",
  "Hunt Valley", "Huntingtown", "Hurlock", "Hyattsville", "Hydes",
  "Ijamsville", "Indian Head", "Issue", "Jarrettsville", "Jefferson",
  "Jessup", "Joppa", "Keedysville", "Kennedyville", "Kensington",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < marylandCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(marylandCities[i]);
}

module.exports = { batches };
