const marylandCities = [
  "Keymar", "Kingsville", "Knoxville", "La Plata", "Lanham",
  "Laurel", "Leonardtown", "Lexington Park", "Lineboro", "Linthicum Heights",
  "Lonaconing", "Long Green", "Lothian", "Loveville", "Lusby",
  "Lutherville Timonium", "Manchester", "Marbury", "Mardela Springs", "Marion Station",
  "Marriottsville", "Maugansville", "Mechanicsville", "Middle River", "Middletown",
  "Millersville", "Monkton", "Monrovia", "Montgomery Village", "Mount Airy",
  "Mount Rainier", "Myersville", "Neavitt", "New Market", "New Windsor",
  "Newark", "North Beach", "North East", "Nottingham", "Oakland",
  "Ocean City", "Odenton", "Oldtown", "Olney", "Owings",
  "Owings Mills", "Oxford", "Oxon Hill", "Parkton", "Parkville",
  "Parsonsburg", "Pasadena", "Patuxent River", "Perry Hall", "Perry Point",
  "Perryville", "Phoenix", "Pikesville", "Pocomoke City", "Point Of Rocks",
  "Pomfret", "Poolesville", "Port Deposit", "Port Republic", "Port Tobacco",
  "Potomac", "Preston", "Prince Frederick", "Princess Anne", "Pylesville",
  "Quantico", "Queen Anne", "Queenstown", "Randallstown", "Rawlings",
  "Reisterstown", "Riderwood", "Ridgely", "Rising Sun", "Riva",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < marylandCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(marylandCities[i]);
}

module.exports = { batches };
