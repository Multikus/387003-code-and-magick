'use strict';

var CLOUD_WIDTH = 420;// размеры облака
var CLOUD_HEIGHT = 270;// размеры облака
var CLOUD_X = 100;// начало координат
var CLOUD_Y = 10;// начало координат
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var SHADOW_CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
var INVERSION_BAR_DRAW = 12;// чтобы отрисовка баров шла вверх
var TEXT_X = 120;// Имена игроков. лево право. начало координат
var TEXT_Y = 230;// Имена игроков. лево право. начало координат
var TEXT_GAP = 50;// Расстояние от текста
var GAP = 10;// расстояние между барами 10
var FONT_GAP = 20;// расстояние между текстом до бара
// var TEXT_WIDTH = 20;// Размер шрифта + отступы
// var RESTRICTION_HEIGHT_BAR = 80;// для расчёта максимальной
var maxHeightBar = CLOUD_HEIGHT / 1.8;// максимальная высота для расчёта пропорции
var barHeight = maxHeightBar;// высота бара
var BAR_WIDTH = 40;
var PLAYER_NAME = 'Вы';
var MY_COLOR = 'rgba(255, 0, 0, 1)';


// рисуем облако и тень

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0]; // максимальный элемент
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) { // проверяем какое значение больше
      maxElement = arr[i]; // перезаписываем его в максимальный элемент
    }
  }
  return maxElement;
};

function getRandomNumber(min, max) {
  var numberRand = Math.round(Math.random() * (max - min) + min);
  return numberRand;
}

var getRandomColor = function () {
  var rColor = getRandomNumber(1, 255);
  var gColor = getRandomNumber(1, 255);
  var bColor = getRandomNumber(1, 255);
  var aColor = aColor = Math.random().toFixed(1);
  return 'rgba(' + rColor + ',' + gColor + ',' + bColor + ',' + aColor + ')';
};

/*
var getRandom = function () {
  return Math.random();
};
*/

var getRenderMyBar = function (ctx, names, times) {
  var maxTime = getMaxElement(times);// вызываем функцию поиска макс. элемента из массива times
  for (var i = 0; i < names.length; i++) {
    if (names === 'Вы') {
      ctx.fillStyle = MY_COLOR;
      ctx.fillRect(TEXT_X + GAP + TEXT_GAP * i, (CLOUD_Y + GAP) * INVERSION_BAR_DRAW, BAR_WIDTH, (-(maxHeightBar * times[i]) / maxTime), barHeight);
      ctx.fillText(names[i], TEXT_X + GAP + TEXT_GAP * i, TEXT_Y + FONT_GAP + GAP, BAR_WIDTH);
    }
  }
};

var getRenderOtherBar = function (ctx, names, times) {
  var maxTime = getMaxElement(times);// вызываем функцию поиска макс. элемента из массива times

  /*
  var count = 0;
  for (var i = 0; i < names.length; i += 1) {
    if (i in names) {
      count += 1;
    }
   }
  for (var j = 0; j < names.length; j++) {
    if (names[j] === 'Вы') {
    names.splice([j], 1);
    }
  }
 */

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') { // должно найти элемент массива который равен текущему игроку
      names.splice([i], 1); // Удалем этот элемент массива
    }
    ctx.fillStyle = getRandomColor();// Вызов функции для заливки. Задаём случайный цвет
    ctx.fillRect(TEXT_X + GAP + TEXT_GAP * i, (CLOUD_Y + GAP) * INVERSION_BAR_DRAW, BAR_WIDTH, (-(maxHeightBar * times[i]) / maxTime), barHeight);
    ctx.fillText(names[i], TEXT_X + GAP + TEXT_GAP * i, TEXT_Y + FONT_GAP + GAP, BAR_WIDTH);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TEXT_GAP + CLOUD_X, 35);
  ctx.fillText('Список результатов:', TEXT_GAP + CLOUD_X, 55);

  // var maxTime = getMaxElement(times);// вызываем функцию поиска макс. элемента из массива times

  for (var i = 0; i < names.length; i++) {
    if (names[i] === PLAYER_NAME) {
      getRenderMyBar(ctx, names, times);
    } else {
      getRenderOtherBar(ctx, names, times);
    }
  }
};

// Это как у меня было после доработок и добавления дополнительных констант

/*
for (var i = 0; i < names.length; i++) {
  if (names[i] === PLAYER_NAME) {
    ctx.fillStyle = MY_COLOR;
    ctx.fillRect(TEXT_X + GAP + TEXT_GAP * i, (CLOUD_Y + GAP) * INVERSION_BAR_DRAW, BAR_WIDTH, (-(maxHeightBar * times[i]) / maxTime), barHeight);
    ctx.fillText(names[i], TEXT_X + GAP + TEXT_GAP * i, TEXT_Y + FONT_GAP + GAP, BAR_WIDTH);
  } else {
    var alfaСhannel = getRandom();
    ctx.fillStyle = ANY_PLAYER_COLOR;// попытка задать случайный канал
    ctx.globalAlpha = alfaСhannel;
    ctx.fillRect(TEXT_X + GAP + TEXT_GAP * i, (CLOUD_Y + GAP) * INVERSION_BAR_DRAW, BAR_WIDTH, (-(maxHeightBar * times[i]) / maxTime), barHeight);
    ctx.fillText(names[i], TEXT_X + GAP + TEXT_GAP * i, TEXT_Y + FONT_GAP + GAP, BAR_WIDTH);
  }
}
*/
