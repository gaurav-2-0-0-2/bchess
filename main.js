var myCanvas = document.getElementById("mycanvas");
var ctx = myCanvas.getContext("2d");
var rectW = 800;
var rectH = 800;
var rectX = (window.innerWidth - rectW) / 2;
var rectY = (window.innerHeight - rectH) / 2;
var block = 100;
function resizeCanvas() {
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
}
var blackPawns = [
    { x: 0, y: 0, pieceType: "pawn" },
    { x: 1, y: 0, pieceType: "pawn" },
    { x: 2, y: 0, pieceType: "pawn" },
    { x: 3, y: 0, pieceType: "pawn" },
    { x: 4, y: 0, pieceType: "pawn" },
    { x: 5, y: 0, pieceType: "pawn" },
    { x: 6, y: 0, pieceType: "pawn" },
    { x: 7, y: 0, pieceType: "pawn" },
];
var whitePawns = [
    { x: 0, y: 0, pieceType: "pawn" },
    { x: 1, y: 0, pieceType: "pawn" },
    { x: 2, y: 0, pieceType: "pawn" },
    { x: 3, y: 0, pieceType: "pawn" },
    { x: 4, y: 0, pieceType: "pawn" },
    { x: 5, y: 0, pieceType: "pawn" },
    { x: 6, y: 0, pieceType: "pawn" },
    { x: 7, y: 0, pieceType: "pawn" },
];
var blackNonPawns = [
    { x: 0, y: 0, pieceType: "rook" },
    { x: 1, y: 0, pieceType: "knight" },
    { x: 2, y: 0, pieceType: "bishop" },
    { x: 3, y: 0, pieceType: "queen" },
    { x: 4, y: 0, pieceType: "king" },
    { x: 5, y: 0, pieceType: "bishop" },
    { x: 6, y: 0, pieceType: "knight" },
    { x: 7, y: 0, pieceType: "rook" },
];
var whiteNonPawns = [
    { x: 0, y: 0, pieceType: "rook" },
    { x: 1, y: 0, pieceType: "knight" },
    { x: 2, y: 0, pieceType: "bishop" },
    { x: 3, y: 0, pieceType: "queen" },
    { x: 4, y: 0, pieceType: "king" },
    { x: 5, y: 0, pieceType: "bishop" },
    { x: 6, y: 0, pieceType: "knight" },
    { x: 7, y: 0, pieceType: "rook" },
];
function chessBoard() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var x = rectX + i * block;
            var y = rectY + j * block;
            ctx.fillStyle = (i + j) % 2 === 0 ? "#FC8F54" : "#FDE7BB";
            ctx.fillRect(x, y, 100, 100);
        }
    }
    blackPawns.forEach(function (pawn) {
        var img = new Image();
        img.src = "./public/black/".concat(pawn.pieceType, ".png");
        var centerX = pawn.x * block + (block - 60) / 2;
        var centerY = pawn.y * block + (block - 60) / 2;
        img.onload = function () {
            ctx.drawImage(img, rectX + centerX, rectY + centerY + block);
        };
    });
    whitePawns.forEach(function (pawn) {
        var img = new Image();
        img.src = "./public/white/".concat(pawn.pieceType, ".png");
        var centerX = pawn.x * block + (block - 60) / 2;
        var centerY = pawn.y * block + (block - 60) / 2;
        img.onload = function () {
            ctx.drawImage(img, rectX + centerX, rectY + centerY + 6 * block);
        };
    });
    blackNonPawns.forEach(function (piece) {
        var img = new Image();
        img.src = "./public/black/".concat(piece.pieceType, ".png");
        var centerX = piece.x * block + (block - 60) / 2;
        var centerY = piece.y * block + (block - 60) / 2;
        img.onload = function () {
            ctx.drawImage(img, rectX + centerX, rectY + centerY);
        };
    });
    whiteNonPawns.forEach(function (piece) {
        var img = new Image();
        img.src = "./public/white/".concat(piece.pieceType, ".png");
        var centerX = piece.x * block + (block - 60) / 2;
        var centerY = piece.y * block + (block - 60) / 2;
        img.onload = function () {
            ctx.drawImage(img, rectX + centerX, rectY + centerY + 7 * block);
        };
    });
}
function draw() {
    resizeCanvas();
    chessBoard();
}
draw();
