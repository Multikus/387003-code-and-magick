
//Константы для отрисовки облака.
var CLOUD_WIDTH = 300;
var CLOUD_HEIGHT = 230;

var CLOUD_X = 40;
var CLOUD_Y = 200;
var TEXT_X = 220;//верх низ
var TEXT_Y = 230;//лево право
var TEXT_GAP = 35;

var GAP = 10; //расстояние между барами
var FONT_GAP = 20; //расстояние между текстом
var TEXT_WIDTH = 30; //расстояние от текста до бара
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP; //высота бара
var BAR_WIDTH = 20;


//рисуем облако и тень
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function(ctx) {

  //Отрисовка гистограммы результатов игроков
  renderCloud(ctx, CLOUD_Y + GAP, CLOUD_X + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_Y, CLOUD_X, '#fff');

  ctx.fillStyle = '#000';

  var playerIndex = 0;
  var playerName = 'Вы';

  var players = ['Вы', 'Иван', 'Юлия'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], TEXT_Y + GAP + TEXT_GAP * i, TEXT_X + FONT_GAP, BAR_WIDTH, BAR_WIDTH);
    ctx.fillRect(CLOUD_Y + (GAP + TEXT_WIDTH) * i, CLOUD_X + GAP, BAR_WIDTH, barHeight);
      //CLOUD_Y + GAP * i + TEXT_WIDTH, CLOUD_X + GAP, BAR_WIDTH * i, barHeight);
  }




/*
  ctx.fillText('Вы', TEXT_Y + GAP, TEXT_X + GAP + FONT_GAP);  //
  ctx.fillRect(CLOUD_Y + GAP + TEXT_WIDTH, CLOUD_X + GAP, BAR_WIDTH, barHeight);

  playerIndex = 1;
  playerName = 'Иван';

  ctx.fillText('Иван', TEXT_Y + TEXT_GAP + GAP, TEXT_X + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_Y + (GAP + TEXT_WIDTH) * 2, CLOUD_X + GAP, BAR_WIDTH, barHeight);

  playerIndex = 2;
  playerName = 'Юлия';

  ctx.fillText('Юлия', TEXT_Y + (TEXT_GAP + GAP) * 2, TEXT_X + GAP + FONT_GAP);
  ctx.fillRect(CLOUD_Y + (GAP + TEXT_WIDTH) * 3, CLOUD_X + GAP, BAR_WIDTH, barHeight);

*/

};
