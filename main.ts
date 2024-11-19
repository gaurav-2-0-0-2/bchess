const myCanvas = <HTMLCanvasElement>document.getElementById("mycanvas")!;
const ctx = myCanvas.getContext("2d")!;

let rectW = 800;
let rectH = 800;
let rectX = (window.innerWidth - rectW) / 2;
let rectY = (window.innerHeight - rectH) / 2;
let block = 100

function resizeCanvas() {
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;
}

const blackPawns = [
    {x:0, y:0, pieceType: "pawn"},
    {x:1, y:0, pieceType: "pawn"},
    {x:2, y:0, pieceType: "pawn"},
    {x:3, y:0, pieceType: "pawn"},
    {x:4, y:0, pieceType: "pawn"},
    {x:5, y:0, pieceType: "pawn"},
    {x:6, y:0, pieceType: "pawn"},
    {x:7, y:0, pieceType: "pawn"},
]

const whitePawns = [
    {x:0, y:0, pieceType: "pawn"},
    {x:1, y:0, pieceType: "pawn"},
    {x:2, y:0, pieceType: "pawn"},
    {x:3, y:0, pieceType: "pawn"},
    {x:4, y:0, pieceType: "pawn"},
    {x:5, y:0, pieceType: "pawn"},
    {x:6, y:0, pieceType: "pawn"},
    {x:7, y:0, pieceType: "pawn"},
]

const blackNonPawns = [
    {x: 0, y: 0, pieceType: "rook"},
    {x: 1, y: 0, pieceType: "knight"},
    {x: 2, y: 0, pieceType: "bishop"},
    {x: 3, y: 0, pieceType: "queen"},
    {x: 4, y: 0, pieceType: "king"},
    {x: 5, y: 0, pieceType: "bishop"},
    {x: 6, y: 0, pieceType: "knight"},
    {x: 7, y: 0, pieceType: "rook"},
]

const whiteNonPawns = [
    {x: 0, y: 0, pieceType: "rook"},
    {x: 1, y: 0, pieceType: "knight"},
    {x: 2, y: 0, pieceType: "bishop"},
    {x: 3, y: 0, pieceType: "queen"},
    {x: 4, y: 0, pieceType: "king"},
    {x: 5, y: 0, pieceType: "bishop"},
    {x: 6, y: 0, pieceType: "knight"},
    {x: 7, y: 0, pieceType: "rook"},
]

function chessBoard(){
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let x = rectX + i * block;
            let y = rectY + j * block;
            ctx.fillStyle = (i + j) % 2 === 0 ? "#FC8F54" : "#FDE7BB";
            ctx.fillRect(x , y , 100, 100)
        }
    }

    blackPawns.forEach(pawn=>{
        let img = new Image()
        img.src = `./public/black/${pawn.pieceType}.png`
        const centerX = pawn.x * block + (block - 60) / 2
        const centerY = pawn.y * block + (block - 60) / 2
        img.onload = function (){
            ctx.drawImage(img, rectX + centerX, rectY + centerY + block)
        }
    })

    whitePawns.forEach(pawn=>{
        let img = new Image()
        img.src = `./public/white/${pawn.pieceType}.png`
        const centerX = pawn.x * block + (block - 60) / 2
        const centerY = pawn.y * block + (block - 60) / 2
        img.onload = function (){
            ctx.drawImage(img, rectX + centerX, rectY + centerY + 6 * block)
        }
    })

    blackNonPawns.forEach(piece=>{
        let img = new Image()
        img.src = `./public/black/${piece.pieceType}.png`
        const centerX = piece.x * block + (block - 60) / 2
        const centerY = piece.y * block + (block - 60) / 2
        img.onload = function (){
            ctx.drawImage(img, rectX + centerX, rectY + centerY)
        }
    })

    whiteNonPawns.forEach(piece=>{
        let img = new Image()
        img.src = `./public/white/${piece.pieceType}.png`
        const centerX = piece.x * block + (block - 60) / 2
        const centerY = piece.y * block + (block - 60) / 2
        img.onload = function (){
            ctx.drawImage(img, rectX + centerX, rectY + centerY + 7 * block)
        }
    })

}


function draw() {
    resizeCanvas();
    chessBoard();
}

draw();
