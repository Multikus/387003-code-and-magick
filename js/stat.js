'use strict';
// Константы для отрисовки облака.
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 40;
var CLOUD_Y = 200;
// чтобы отрисовка баров шла вверх
var INVERSION_BAR_DRAW = 18;
// верх низ
var TEXT_X = 220;
// лево право
var TEXT_Y = 230;
var TEXT_GAP = 35;
// расстояние между барами 10
var GAP = 10;
// расстояние между текстом
var FONT_GAP = 20;
// расстояние от текста до бара
var TEXT_WIDTH = 30;
// высота бара
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;
var BAR_WIDTH = 20;
// максимальная высота для расчёта пропорции
var MAX_HEIGHT_BAR = 150;
var PLAYER_NAME = 'Вы';
// рисуем облако и тень
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// нахождение максимума в массиве

var getMaxElement = function (arr) {
  var maxElement = arr[0]; // максимальный элемент
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) { // проверяем какое значение больше
      maxElement = arr[i]; // перезаписываем его в максимальный элемент
    }
  }
  return maxElement;
};

var getRandom = function () {
  return Math.random();
};

window.renderStatistics = function (ctx, names, times) {

  // Отрисовка гистограммы результатов игроков
  renderCloud(ctx, CLOUD_Y + GAP, CLOUD_X + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_Y, CLOUD_X, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH, 55);
  ctx.fillText('Список результатов:', CLOUD_WIDTH, 75);

  var maxTime = getMaxElement(times); // вызываем функцию поиска макс. элемента из массива times


  for (var i = 0; i < names.length; i++) {
    // без этого условия, последний текстовый элемент почему-то сильно смещался.
    var alfaСhannel = getRandom();
    if (names[i] === PLAYER_NAME) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, 128)';// попытка задать случайный канал
      ctx.globalAlpha = alfaСhannel;
    }
    ctx.fillRect(TEXT_GAP + CLOUD_Y + (GAP + TEXT_WIDTH) * i, CLOUD_X + GAP * INVERSION_BAR_DRAW, BAR_WIDTH, (-(MAX_HEIGHT_BAR * times[i]) / maxTime), barHeight);
    if (names.length > 2 && i === 3) {
      ctx.fillText(names[i], TEXT_Y + (GAP * 2) + TEXT_GAP * i, TEXT_X + FONT_GAP + GAP, BAR_WIDTH, BAR_WIDTH);
    } else {
      ctx.fillText(names[i], TEXT_Y + GAP + TEXT_GAP * i, TEXT_X + FONT_GAP + GAP, BAR_WIDTH, BAR_WIDTH);
    }
  }
};
