//Listi af vegum á milli húsa
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  //Býr til object sem erfir frá engu sem sagt hefur ekkert gildi
  let graph = Object.create(null);
  function addEdge(from, to) {
  	//Býr til property fyrir objectið
    if (graph[from] == null) {
      //Býr til property (from) með lista með (to) sem gildið
      graph[from] = [to];
    } else {
      //Ef property (from) er nú þegar til bætir forritið við (to) í listann
      graph[from].push(to);
    }
  }
  //Functionið notar listann sem það tók inn notar for lykkju til að skipta öllum
  //gildunum í listanum á "-" og setur bæði gildin í "addEdge" functionið
  for (let [from, to] of edges.map(r => r.split("-"))) {
  	console.log(from,to)
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

//Býr til object með hvern stað sem property með lista af öllum stöðunum sem róbotinn
//getur farið á frá staðnum
const roadGraph = buildGraph(roads);

console.log(roadGraph)

//Class cunstructor
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
  	console.log(roadGraph[this.place])
    //Gáir hvort roadGraph[this.place] er með destination
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      //Býr til nýtt destination
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

//let object = Object.freeze({value: 5});
//object.value = 10;
//console.log(object.value);
// → 5

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}
//velur random hlut úr array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
//Býr til random stað fyrir robot
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}
//Býr til village state með 5 pökkum
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    //Velur random stað
    let address = randomPick(Object.keys(roadGraph));
    //Velur random stað ef staðurinn er sá sami og address gerir functionið nýjan stað fyrir place
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    //gerir lista af parcels
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};
//Robot fer á random staði til að fynna parcels
runRobot(VillageState.random(), randomRobot);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns
//Póst leið
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  //tekur fyrsta gildið úr memory og gerið það af dircetion og droppar því úr memory listanum
  return {direction: memory[0], memory: memory.slice(1)};
}
//finnur allar mögulegar og velur styðstu
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(),
                  goalOrientedRobot, []);
