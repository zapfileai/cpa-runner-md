const marylandCities = [
  "Aberdeen", "Abingdon", "Accident", "Accokeek", "Adamstown",
  "Andrews", "Annapolis", "Annapolis Junction", "Arnold", "Ashton",
  "Baldwin", "Baltimore", "Barnesville", "Barton", "Bel Air",
  "Bel Alton", "Belcamp", "Beltsville", "Berlin", "Bethesda",
  "Bishopville", "Bladensburg", "Boonsboro", "Bowie", "Boyds",
  "Bozman", "Braddock Heights", "Brandywine", "Brinklow", "Brookeville",
  "Brooklandville", "Brooklyn", "Broomes Island", "Brownsville", "Brunswick",
  "Bryans Road", "Bryantown", "Buckeystown", "Burtonsville", "Cabin John",
  "California", "Callaway", "Cambridge", "Capitol Heights", "Catonsville",
  "Cecilton", "Centreville", "Chaptico", "Charlestown", "Charlotte Hall",
  "Cheltenham", "Chesapeake Beach", "Chesapeake City", "Chester", "Chestertown",
  "Chevy Chase", "Childs", "Church Creek", "Church Hill", "Churchton",
  "Churchville", "Clarksburg", "Clarksville", "Clear Spring", "Clinton",
  "Cockeysville", "College Park", "Colora", "Columbia", "Conowingo",
  "Cooksville", "Cordova", "Crisfield", "Crofton", "Crownsville",
  "Cumberland", "Curtis Bay", "Damascus", "Darlington", "Davidsonville",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < marylandCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(marylandCities[i]);
}

module.exports = { batches };
