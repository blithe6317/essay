var map = new BMap.Map("map", { enableMapClick: false });
let initPoint = [115.725006, 34.404443];
const movePx = 0.00002;
const maxZoom = 19;
const minZoom = 16;
let zoom = 18;

$(function() {
  initMap();
});

function initMap() {
  var point = new BMap.Point(initPoint[0], initPoint[1]);
  map.centerAndZoom(point, zoom);
  map.disableDragging();
  map.disableDoubleClickZoom();
  map.setMinZoom(minZoom);
  map.setMaxZoom(maxZoom);

  movePoint(point);
  map.addEventListener("click", function() {
    return;
  });
  drawBoundary();
  window.onkeydown = addKeyDown;
}

function addKeyDown(e) {
  const { keyCode } = e;
  const k = movePx * (maxZoom - zoom || 1);
  switch (keyCode) {
    case 37:
      initPoint[0] -= k;
      break;
    case 38:
      initPoint[1] += k;
      break;
    case 39:
      initPoint[0] += k;
      break;
    case 40:
      initPoint[1] -= k;
      break;
  }

  var point = new BMap.Point(initPoint[0], initPoint[1]);
  movePoint(point);
}

function enlarge() {
  zoom++;
  map.setZoom(zoom);
}

function narrow() {
  zoom--;
  map.setZoom(zoom);
}

// 边界
function drawBoundary() {
  var polyline = new BMap.Polyline(
    [
      new BMap.Point(115.72490599999996, 34.40426300000001),
      new BMap.Point(115.72380599999961, 34.40422300000001),
      new BMap.Point(115.72398599999967, 34.40838299999985),
      new BMap.Point(115.72410599999971, 34.411222999999744),
      new BMap.Point(115.72416599999973, 34.4123029999997),
      new BMap.Point(115.72426599999976, 34.41308299999967),
      new BMap.Point(115.72426599999976, 34.413302999999665),
      new BMap.Point(115.72380599999961, 34.41342299999966),
      new BMap.Point(115.72056599999858, 34.41342299999966),
      new BMap.Point(115.72038599999853, 34.41920299999944),
      new BMap.Point(115.72256599999922, 34.41898299999945),
      new BMap.Point(115.72962600000146, 34.41794299999949),
      new BMap.Point(115.7310260000019, 34.40662299999992),
      new BMap.Point(115.72686600000058, 34.40648299999992),
      new BMap.Point(115.72678600000056, 34.404343000000004),
      new BMap.Point(115.72490599999996, 34.40426300000001)
    ],
    { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 1 }
  );
  map.addOverlay(polyline);
}

function goDormitoryI() {
  initPoint = STORY_DATA.points.dormitoryI;
  var point = new BMap.Point(initPoint[0], initPoint[1]);
  movePoint(point);
}

function goDormitoryY() {
  initPoint = STORY_DATA.points.dormitoryY;
  var point = new BMap.Point(initPoint[0], initPoint[1]);
  movePoint(point);
}

function goDoorWay() {}

function movePoint(point) {
  var allOverlay = map.getOverlays();
  for (var i = 0; i < allOverlay.length; i++) {
    var marker = allOverlay[i];
    if (marker.getLabel && marker.getLabel().content === "point") {
      map.removeOverlay(allOverlay[i]);
    }
  }

  var label = new BMap.Label("point", { offset: new BMap.Size(20, -10) });
  var marker = new BMap.Marker(point);
  marker.setLabel(label);
  marker.disableDragging();
  map.addOverlay(marker);

  map.setCenter(point);
}
