var game;
var canSpin;
var slices = 8;
var slicePrizes = ["chia khoa","empty","150","100","200","empty","500","50"];
var prize;
var timer = 5000;
var wheel;
var prizeText;
var that;
window.onload = function(){
game = new Phaser.Game(1500,500, Phaser.CANVAS,"wheel", null, true);	
game.state.add("PlayGame", playGame);
game.state.start("PlayGame");
}
var playGame = function(game){};
playGame.prototype = {
	preload: function(){
		game.load.image("pin","images/pin.png");
		game.load.image("wheel","images/wheel.png");
},
	create: function(){
		that = this;
		var pin = game.add.sprite(game.width/2, game.height/2, "pin");
		pin.anchor.set(0.5);
		wheel = game.add.sprite(game.width/2, game.height/2, "wheel");
		wheel.anchor.set(0.5);
		prizeText = game.add.text(game.world.centerX, 480, "");
		prizeText.anchor.set(0.5);
		prizeText.align = "center";
	},
	spin(lat,lng, value){
	if(canSpin){
		var rounds = game.rnd.between(10,16);
		var degress = game.rnd.between(lat,lng);
		prize = slices - 1 - Math.floor(degress / (360/slices));
		canSpin = false;
		var spinTween = game.add.tween(wheel).to({
			angle: 360 * rounds + degress + 90
		}, timer, Phaser.Easing.Quadratic.Out, true);
		spinTween.onComplete.add(this.winPrize(value), this);
	}
	},
	winPrize(value){
		prizeText.text = slicePrizes[prize];
	}
}
function start(e){
	canSpin = true;
	/*$.ajax({
		url: "/VongXoay/RandomEvent";
		data: {"data": "data gửi lên sv thành công"},
		type: POST,
		success: function(){
		self.spin(res.lat,res.lng,res.value);
	},
		error: function(){
			
		}
	*/
		that.spin("0","45","empty");
	
}