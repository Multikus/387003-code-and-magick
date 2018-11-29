
//Константы для отрисовки облака.
var CLOUD_WIDTH = 420; //500
var CLOUD_HEIGHT = 270; //230

var CLOUD_X = 40;
var CLOUD_Y = 200;
var TEXT_X = 220;//верх низ
var TEXT_Y = 230;//лево право
var TEXT_GAP = 35;

var GAP = 10; //расстояние между барами 10
var FONT_GAP = 20; //расстояние между текстом
var TEXT_WIDTH = 30; //расстояние от текста до бара
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP; //высота бара
var BAR_WIDTH = 20;
var MAX_HEIGHT_BAR = 150; //максимальная высота для расчёта пропорции

//рисуем облако и тень
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


//нахождение максимума в массиве

var getMaxElement = function(arr) {
  var maxElement = arr[0]; //максимальный элемент
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) { // проверяем какое значение больше
      maxElement = arr[i]; //перезаписываем его в максимальный элемент
    }
  }
  return maxElement;
};

var getRandom = function () {
  return Math.random();
};

window.renderStatistics = function(ctx, names, times) {

  //Отрисовка гистограммы результатов игроков
  renderCloud(ctx, CLOUD_Y + GAP, CLOUD_X + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_Y, CLOUD_X, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 450, 55);
  ctx.fillText('Список результатов:', 450, 75);

  var maxTime = getMaxElement(times); //вызываем функцию поиска макс. элемента из массива times


  for (var i = 0; i < names.length; i++) {
   // без этого условия, последний текстовый элемент почему-то сильно смещался.
   var alfaСhannel = getRandom();
   if (names[i] == 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   } else {
    ctx.fillStyle = 'rgba(0, 0, 128, alfaСhannel)'// попытка задать случайный канал
    //ctx.globalAlpha = alfaСhannel;
   }
   ctx.fillRect(TEXT_GAP + CLOUD_Y + (GAP + TEXT_WIDTH) * i, CLOUD_X + GAP, BAR_WIDTH, (MAX_HEIGHT_BAR * times[i]) / maxTime, barHeight);
    if (names.length > 2 && i == 3) {
      ctx.fillText(names[i], TEXT_Y + (GAP * 2) + TEXT_GAP * i, TEXT_X + FONT_GAP + GAP, BAR_WIDTH, BAR_WIDTH);
    } else {
      ctx.fillText(names[i], TEXT_Y + GAP + TEXT_GAP * i, TEXT_X + FONT_GAP + GAP, BAR_WIDTH, BAR_WIDTH);
    }
  }
};
//
