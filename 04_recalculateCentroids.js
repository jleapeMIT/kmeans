function run(){
    var k = 3;
    var means = recalculateCentroids(clusters);

    // graph data plus old means
    var oldMeans = [{x:120,y:275},{x:475,y:30},{x:100,y:475}];    
    clearCanvas();
    graphClusters(clusters);    
    graphMeans(oldMeans, 'gray');

    // graph new means
    graphMeans(means, 'pink', oldMeans);

    // display means using text
    var html = '';
    means.forEach(function(point,i){
        html += '{x:' + point.x + 
                ',y:' + point.y +  '},<br>';
    });
    document.getElementById('means').innerHTML = html;
}


// calcute centroids (means) for each cluster
function recalculateCentroids(clusters){

    var means = [];

    clusters.forEach((cluster, i) => {

        var sumX = 0;
        var sumY = 0;
        var length = cluster.length;

        cluster.forEach((point) => {
            sumX += point.x;
            sumY += point.y;
        })

        var centroidX = Math.round(sumX / length, 0);
        var centroidY = Math.round(sumY / length, 0);
        means[i] = {x:centroidX, y:centroidY}
    });
    
    return means

}


// data points for kMeans
var data = [
    {x:150, y:100, centroid:null},
    {x:135, y:65,  centroid:null},
    {x:100, y:50,  centroid:null}, 
    {x:65,  y:65,  centroid:null},
    {x:50,  y:100, centroid:null},
    {x:65,  y:135, centroid:null},
    {x:100, y:150, centroid:null},    
    {x:135, y:135, centroid:null},

    {x:600, y:350, centroid:null},
    {x:571, y:279, centroid:null},
    {x:500, y:250, centroid:null},
    {x:429, y:279, centroid:null},
    {x:400, y:350, centroid:null},
    {x:429, y:421, centroid:null},
    {x:500, y:450, centroid:null},
    {x:571, y:421, centroid:null},

    {x:250, y:350, centroid:null},
    {x:228, y:297, centroid:null},
    {x:175, y:275, centroid:null},    
    {x:122, y:297, centroid:null},    
    {x:100, y:350, centroid:null},    
    {x:122, y:403, centroid:null},    
    {x:175, y:425, centroid:null},        
    {x:228, y:403, centroid:null}
];

var clusters = [
    [
        {x:150, y:100, centroid:0},
        {x:135, y:65,  centroid:0},
        {x:100, y:50,  centroid:0}, 
        {x:65,  y:65,  centroid:0},
        {x:50,  y:100, centroid:0},
        {x:65,  y:135, centroid:0},
        {x:100, y:150, centroid:0},    
        {x:135, y:135, centroid:0},
    ],
    [
        {x:250, y:350, centroid:1},
        {x:228, y:297, centroid:1},
        {x:175, y:275, centroid:1},    
        {x:122, y:297, centroid:1},    
        {x:100, y:350, centroid:1},    
        {x:122, y:403, centroid:1},    
        {x:175, y:425, centroid:1},        
        {x:228, y:403, centroid:1}
    ],
    [
        {x:600, y:350, centroid:2},
        {x:571, y:279, centroid:2},
        {x:500, y:250, centroid:2},
        {x:429, y:279, centroid:2},
        {x:400, y:350, centroid:2},
        {x:429, y:421, centroid:2},
        {x:500, y:450, centroid:2},
        {x:571, y:421, centroid:2},    
    ]        
];

var exercise = {};
exercise.recalculateCentroids = recalculateCentroids;