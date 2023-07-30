
var cnvs = document.createElement("CANVAS");
var radius = 200;
document.getElementById('posunoutdolu').addEventListener('click', function() {
  const konecStranky = document.getElementById('konec');
  konecStranky.scrollIntoView();
});

cnvs.width = (3 * window.innerWidth)/4;
cnvs.height = (4 * window.innerHeight)/4;

cnvs.style.border = "2px solid black";

cnvs.style.position = "absolute";
cnvs.style.left = "50%";
cnvs.style.transform = "translate(-50%, -50%)";
cnvs.style.marginTop = "500px";

document.body.appendChild(cnvs);

var x_center = cnvs.width/2;
var y_center = cnvs.height/2;


var ctx = cnvs.getContext("2d");
//A
ctx.beginPath();
ctx.arc(x_center, y_center, 50, 0, 2*Math.PI);
ctx.fillStyle = "blue";
ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('A', x_center-15, y_center -15);
//D
ctx.beginPath();
    ctx.arc(x_center, y_center + 150, 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.fillText('D', x_center-15, y_center +150);
//B
ctx.beginPath();
    ctx.arc(x_center + 150, y_center , 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('B', x_center+150, y_center -15);
//E
ctx.beginPath();
    ctx.arc(x_center + 150, y_center +150 , 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('E', x_center+165, y_center +135);
//C
ctx.beginPath();
    ctx.arc(x_center +300, y_center , 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('C', x_center+300, y_center -15);
//F
ctx.beginPath();
    ctx.arc(x_center + 300, y_center +150, 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('F', x_center+315, y_center +150);
//G
ctx.beginPath();
    ctx.arc(x_center, y_center+300, 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('G', x_center-20, y_center +300);
//H
ctx.beginPath();
    ctx.arc(x_center +150, y_center+300, 50, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('H', x_center+150, y_center +320);
//I
ctx.beginPath();
    ctx.arc(x_center +300, y_center+300, 50, 0, 2*Math.PI);
    ctx.fillStyle = "blue";
    ctx.closePath();
ctx.fill();
ctx.fillStyle = "white"; 
ctx.font = '40px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillText('I', x_center+315, y_center +300);

var linesArray = [];
var valuesArray = [];



//AD
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.moveTo(x_center, y_center);
var AD = Math.floor(Math.random() * 20);
linesArray.push(AD);
ctx.lineTo(x_center, y_center + 150);
ctx.stroke();
ctx.closePath();
var text = AD.toString(); 
ctx.font = '20px Arial'; 
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillStyle = 'black'; 
ctx.fillText(text, x_center +15, y_center +75 + AD / 2);
linesArray.push({ line: "AD", value: AD });

//AB
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center, y_center);
    var AB = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center + 150, y_center );
    ctx.stroke();
    ctx.closePath();
    var text = AB.toString(); 
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black'; 
    ctx.fillText(text, x_center +75, y_center -15 + AB / 2);
    linesArray.push({ line: "AB", value: AB });
//DE
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center + 150 , y_center +150);
    var DE = Math.floor(Math.random() * 20); 
    ctx.lineTo(x_center , y_center + 150);
    ctx.stroke();
    ctx.closePath();
    var text = DE.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +75, y_center +135 + DE / 2);
    linesArray.push({ line: "DE", value: DE });

//BC
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +150, y_center);
    var BC = Math.floor(Math.random() * 20); 
    ctx.lineTo(x_center + 300, y_center );
    ctx.stroke();
    ctx.closePath();
    var text = BC.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +225, y_center-15 + DE / 2);
    linesArray.push({ line: "BC", value: BC });
//BE
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +150, y_center);
    var BE = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +150, y_center+150 );
    ctx.stroke();
    ctx.closePath();
    var text = BE.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +160, y_center+75 + BE / 2);
    linesArray.push({ line: "BE", value: BE });
//DG
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center , y_center +150) ;
    var DG = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = DG.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +15, y_center+225 + DG / 2);
    linesArray.push({ line: "DG", value: DG });
//GH
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center , y_center +300) ;
    var GH = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +150 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = GH.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +75, y_center+275 + GH / 2);
    linesArray.push({ line: "GH", value: GH });
//HI
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +150, y_center +300) ;
    var HI = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = HI.toString();
    ctx.font = '20px Arial'; 
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +225, y_center+275 + HI / 2);
    linesArray.push({ line: "HI", value: HI });
//CF
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +300 , y_center);
    var CF = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +300 , y_center + 150);
    ctx.stroke();
    ctx.closePath();
    var text = CF.toString();
    ctx.font = '20px Arial';    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +315, y_center+75 + CF / 2);
    linesArray.push({ line: "CF", value: CF });
//FI
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +300 , y_center+150);
    var FI = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = FI.toString();
    ctx.font = '20px Arial';    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +315, y_center+225 + FI / 2);
//EI
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +150 , y_center+150);
    var EI = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = EI.toString();
    ctx.font = '20px Arial';    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +225, y_center+200 + EI / 2);
    linesArray.push({ line: "EI", value: EI });
//BF
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center +150 , y_center);
    var BF = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +300 , y_center + 150);
    ctx.stroke();
    ctx.closePath();
    var text = BF.toString();
    ctx.font = '20px Arial';    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +225, y_center+60 + BF / 2);
    linesArray.push({ line: "BF", value: BF });
//DH
ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x_center, y_center +150);
    var DH = Math.floor(Math.random() * 20);
    ctx.lineTo(x_center +150 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
    var text = DH.toString();
    ctx.font = '20px Arial';    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = 'black';
    ctx.fillText(text, x_center +90, y_center+220 + DH / 2);
    linesArray.push({ line: "DH", value: DH });

    linesArray.forEach(item => {
      console.log(item.line + ": " + item.value);
    });


class Vertex {
    constructor(label) {
      this.label = label;
    }
  }
  

  class Edge {
    constructor(startVertex, endVertex, value) {
      this.startVertex = startVertex;
      this.endVertex = endVertex;
      this.value = value;
    }
  }
  

  class Graph {
    constructor() {
      this.vertices = new Map(); 
      this.edges = []; 
    }
  
    addVertex(label) {
      const newVertex = new Vertex(label);
      this.vertices.set(label, newVertex);
    }
  
    addEdge(startVertexLabel, endVertexLabel, value) {
      const startVertex = this.vertices.get(startVertexLabel);
      const endVertex = this.vertices.get(endVertexLabel);
  
      if (startVertex && endVertex) {
        const newEdge = new Edge(startVertex, endVertex, value);
        this.edges.push(newEdge);
      }
    }
  
    dijkstra(startVertexLabel) {
      const distances = {}; 
      const previousVertices = {}; 
      const visitedVertices = new Set(); 
      const queue = new PriorityQueue(); 
  

      for (const vertexLabel of this.vertices.keys()) {
        distances[vertexLabel] = Infinity;
        previousVertices[vertexLabel] = null;
      }
  

      distances[startVertexLabel] = 0;
  

      queue.enqueue(startVertexLabel, 0);
  

      while (!queue.isEmpty()) {
        const currentVertexLabel = queue.dequeue();
  

        if (!visitedVertices.has(currentVertexLabel)) {
          visitedVertices.add(currentVertexLabel);
  

          const edges = this.findEdgesByStartVertexLabel(currentVertexLabel);
          for (const edge of edges) {
            const { endVertex, value } = edge;
            const totalValue = distances[currentVertexLabel] + value;
  

            if (totalValue < distances[endVertex.label]) {
              distances[endVertex.label] = totalValue;
              previousVertices[endVertex.label] = currentVertexLabel;
              queue.enqueue(endVertex.label, totalValue);
            }
          }
        }
      }
  
      return {
        distances,
        previousVertices,
      };
    }
  
    findEdgesByStartVertexLabel(startVertexLabel) {
      return this.edges.filter((edge) => edge.startVertex.label === startVertexLabel);
    }
  }
  

  class PriorityQueue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(element, priority) {
      const newElement = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.elements.length; i++) {
        if (newElement.priority < this.elements[i].priority) {
          this.elements.splice(i, 0, newElement);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.elements.push(newElement);
      }
    }
  
    dequeue() {
      return this.elements.shift().element;
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  }
  

  const graph = new Graph();
  

  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  graph.addVertex('G');
  graph.addVertex('H');
  graph.addVertex('I');
  

  graph.addEdge('A', 'B', AB);
  graph.addEdge('A', 'D', AD);
  graph.addEdge('B', 'C', BC);
  graph.addEdge('B', 'E', BE);
  graph.addEdge('B', 'F', BF);
  graph.addEdge('C', 'F', CF);
  graph.addEdge('C', 'B', BC);
  graph.addEdge('D', 'A', AD);
  graph.addEdge('D', 'E', DE);
  graph.addEdge('D', 'G', DG);
  graph.addEdge('D', 'H', DH);
  graph.addEdge('E', 'B', BE);
  graph.addEdge('E', 'D', DE);
  graph.addEdge('E', 'I', EI);
  graph.addEdge('F', 'C', CF);
  graph.addEdge('F', 'I', FI);
  graph.addEdge('F', 'B', BF);
  graph.addEdge('G', 'D', DG);
  graph.addEdge('G', 'H', GH);
  graph.addEdge('H', 'D', DH);
  graph.addEdge('H', 'G', GH);
  graph.addEdge('H', 'I', HI);




  const startVertexLabel = 'A';
  const { distances, previousVertices } = graph.dijkstra(startVertexLabel);

const vertexLabel = 'I';
const path = getPathToVertex(vertexLabel);

ctx.fillStyle = 'black';
ctx.font = '16px Arial';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
ctx.fillText(`Nejkratší cesta k vrcholu ${vertexLabel}: ${path}`, x_center + 200, y_center - 200); 


function getPathToVertex(vertexLabel) {
  let path = vertexLabel;
  let previousVertex = previousVertices[vertexLabel];
  while (previousVertex) {
    path = previousVertex + ' -> ' + path;
    previousVertex = previousVertices[previousVertex];
  }
  return path;
}


  
  // Výpis výsledků
  console.log('Výsledky Dijkstrova algoritmu:');
  console.log('-----------------------------');
  for (const vertexLabel in distances) {
    console.log(`Vzdálenost od vrcholu ${startVertexLabel} k vrcholu ${vertexLabel}: ${distances[vertexLabel]}`);
  }
  
  
  console.log('\nNejkratší cesta:');
  console.log('-----------------------------');
  for (const vertexLabel in previousVertices) {
    let path = vertexLabel;
    let previousVertex = previousVertices[vertexLabel];
    while (previousVertex) {
      path = previousVertex + ' -> ' + path;
      previousVertex = previousVertices[previousVertex];
    }
    console.log(`Cesta k vrcholu ${vertexLabel}: ${path}`);
  }
  
//nove cesty na tu cervenou


//AD
ctx.beginPath();
ctx.lineWidth = 3;
if (path.includes("A -> D")) {
  ctx.strokeStyle = "red";
} else {
  ctx.strokeStyle = "black";
}
ctx.moveTo(x_center, y_center);
ctx.lineTo(x_center, y_center + 150);
ctx.stroke();
ctx.closePath();


//AB
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("A -> B")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center, y_center);
    ctx.lineTo(x_center + 150, y_center );
    ctx.stroke();
    ctx.closePath();
//DE
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("D -> E")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center + 150 , y_center +150);
    ctx.lineTo(x_center , y_center + 150);
    ctx.stroke();
    ctx.closePath();


//BC
    ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("B -> C")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +150, y_center);
    ctx.lineTo(x_center + 300, y_center );
    ctx.stroke();
    ctx.closePath();

//BE
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("B -> E")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +150, y_center);
    ctx.lineTo(x_center +150, y_center+150 );
    ctx.stroke();
    ctx.closePath();
//DG
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("D -> G")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center , y_center +150) ;
    ctx.lineTo(x_center , y_center + 300);
    ctx.stroke();
    ctx.closePath();
//GH
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("G -> H")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center , y_center +300) ;
    ctx.lineTo(x_center +150 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
//HI
    ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("H -> I")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +150, y_center +300) ;
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();

//CF
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("C -> F")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +300 , y_center);
    ctx.lineTo(x_center +300 , y_center + 150);
    ctx.stroke();
    ctx.closePath();
//FI
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("F -> I")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +300 , y_center+150);
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();

//EI
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("E -> I")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +150 , y_center+150);
    ctx.lineTo(x_center +300 , y_center + 300);
    ctx.stroke();
    ctx.closePath();
//BF
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("B -> F")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center +150 , y_center);
    ctx.lineTo(x_center +300 , y_center + 150);
    ctx.stroke();
    ctx.closePath();
//DH
ctx.beginPath();
    ctx.lineWidth = 3;
    if (path.includes("D -> H")) {
      ctx.strokeStyle = "red";
    } else {
      ctx.strokeStyle = "black";
    }
    ctx.moveTo(x_center, y_center +150);
    ctx.lineTo(x_center +150 , y_center + 300);
    ctx.stroke();
    ctx.closePath();


