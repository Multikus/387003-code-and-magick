
//Константы для отрисовки облака.
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;

var GAP = 10; //расстояние между барами
var FONT_GAP = 15; //расстояние между текстом
var TEXT_WIDTH = 50; //расстояние от текста до бара
var BAR_HEIGHT = 20; //высота бара
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP; //Расчёт ширины бара
/*
Если мы будем использовать константы для того, чтобы определить основные параметры отрисовки,
а остальные параметры расчитывать, нам в будущем будет проще изменять размеры графика, если понадобится.

Например, ширина столбика гистограммы рассчитывается из ширины окна.
Чтобы понять, какая максимальная длина может быть у столбика, нужно из ширины облака вычесть
размеры отступов от левого и правого краёв и оставить место для текста.
*/




//рисуем облако и тень
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function(ctx, players, times) {
  //передаём цвет облака для функции отрисовки
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');

  //Отрисовка гистограммы результатов игроков
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  //Отрисовка первого столбца
  ctx.fillStyle = '#000';


  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0); //расчёт отступа "+ (GAP + BAR_HEIGHT) * 0" используется только для единообразия
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0, barWidth, BAR_HEIGHT); //430 это ширина бара, в переменной barWidth  || (GAP + BAR_HEIGHT) * 0 нужен для единообразия

  //Отрисовка второго столбца

  /*
  Теперь давайте доработаем отрисовку графика так, чтобы каждый из столбцов гистограммы использовал константы,
  которые мы создали ранее.
  Для начала попробуем отрисовать подписи к столбикам.
  Если первый столбец рисуется вверху облака, то последующие нужно сдвигать вниз.
  Второй столбец гистограммы рисуется аналогично первому, но к его координате нужно
  добавить высоту ещё одного столбца (BAR_HEIGHT) и ещё один отступ между столбцами (GAP).
  */

  ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1, barWidth, BAR_HEIGHT);

  //Отрисовка 3 столбца
  ctx.fillText('Юлия', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + (GAP + BAR_HEIGHT) * 2);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2, barWidth, BAR_HEIGHT);

};
