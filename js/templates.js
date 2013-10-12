this["templates"] = this["templates"] || {};

this["templates"]["all-lectures"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li>\n                    <h3 class=\"b-lecture__name\"><a href=\"#!/lectures/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h3>\n                    <ul class=\"b-lecture__tags\">\n                        ";
  stack1 = helpers['if'].call(depth0, depth0.video_url, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, depth0.slides_url, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                    <div class=\"b-lecture__lector-name\">";
  if (stack1 = helpers.lector_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lector_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n                </li>\n\n               ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                        <li class=\"video_tag\">видео</li>\n                        ";
  }

function program4(depth0,data) {
  
  
  return "\n                        <li class=\"slide_tag\">слайды</li>\n                        ";
  }

  buffer += "<div class=\"b-page-lectures\">\n        <h1>ЛЕКЦИИ</h1>\n\n        <div class=\"b-lectures__list\">\n            <ol class=\"b-lecture\">\n                ";
  stack1 = helpers.each.call(depth0, depth0.lectures, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ol>\n        </div>\n    </div>\n    </div>";
  return buffer;
  });

this["templates"]["all-students"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"b-page-students\">\n        <h1>СТУДЕНТЫ</h1>\n\n        <div class=\"b-student__control\">\n            <span class=\"b-button addStudent\">+ добавить студента</span>\n        </div>\n        <div class=\"b-students__list\">\n\n        </div>\n    </div>\n    </div>";
  });

this["templates"]["comments"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"b-page-lecture-big__comments_line\">\n            <div class=\"b-page-lecture-big__comments-author\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"b-page-lecture-big__comments_comments-list\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.comments, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>";
  return buffer;
  });

this["templates"]["dialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n            <div class=\"b-dialog__twocols\">\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">Имя</span>\n                            <input type=\"text\" name=\"first_name\" value=\"";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                            class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">Фамилия</span>\n                            <input type=\"text\" name=\"last_name\" value=\"";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"b-dialog__line\">\n                <label>\n                    <span class=\"b-dialog__label\">Город</span>\n                    <input type=\"text\" name=\"city\" value=\"";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                </label>\n            </div>\n            <div class=\"b-dialog__line\">\n                <label>\n                    <span class=\"b-dialog__label\">Фото</span>\n                    <input type=\"text\" name=\"link_photo\" value=\"";
  if (stack1 = helpers.link_photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                </label>\n\n                <p class=\"b-dialog__line_example\">Иван</p>\n            </div>\n            <div class=\"b-dialog__line\">\n                <label>\n                    <span class=\"b-dialog__label\">Описание</span>\n                    <textarea cols=\"30\" rows=\"4\" name=\"about\" class=\"b-inp\">";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n                </label>\n            </div>\n            <div class=\"b-dialog__twocols\">\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">ВКонтакте</span>\n                            <input type=\"text\" name=\"link_vk\" value=\"";
  if (stack1 = helpers.link_vk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_vk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">Github</span>\n                            <input type=\"text\" name=\"link_gihub\" value=\"";
  if (stack1 = helpers.link_gihub) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_gihub; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"b-dialog__twocols\">\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">Yandex</span>\n                            <input type=\"text\" name=\"link_yaru\" value=\"";
  if (stack1 = helpers.link_yaru) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_yaru; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"b-dialog__col\">\n                    <div class=\"b-dialog__line\">\n                        <label>\n                            <span class=\"b-dialog__label\">Facebook</span>\n                            <input type=\"text\" name=\"link_facebook\" value=\"";
  if (stack1 = helpers.link_facebook) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_facebook; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"b-inp\"/>\n                        </label>\n                    </div>\n                </div>\n                <input type=\"hidden\" name=\"id\" value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n            </div>\n            <button class=\"b-button\">ОК</button>";
  return buffer;
  });

this["templates"]["error404"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"b-error404\">\n        <b>404</b>\n        страница не найдена <br>\n        <a href=\"#\">перейти на главную</a>\n    </div>";
  });

this["templates"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"b-page-index\">\n        <h1>О ШРИ</h1>\n\n        <p>Яндекс открывает набор во вторую Школу разработки интерфейсов в Москве.</p>\n\n        <p>Мы приглашаем студентов старших курсов и недавних выпускников вузов, которые хотят развиваться в области\n            фронтенд-разработки веб-сервисов. Чтобы учиться в нашей Школе, вам понадобятся базовые знания по\n            разработке интерфейсов и небольшой опыт их создания.</p>\n\n        <p>Бесплатные занятия будут проходить три раза в неделю в <a\n                href=\"http://company.yandex.ru/contacts/redrose/\" title=\"московском офисе Яндекса\">московском офисе\n            Яндекса</a>: <strong>во вторник и четверг — с 18:30 до 21:30, в субботу — с 12:00 до 15:00.</strong></p>\n\n        <p>Наиболее успешные выпускники Школы получат возможность пройти практику в компании.</p>\n\n        <h3>Как поступить</h3>\n        <div class=\"b-twitter\">\n<a class=\"twitter-timeline\" width=\"300\" height=\"400\" href=\"https://twitter\n.com/search?q=%23%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81\"\ndata-widget-id=\"388685857948835840\">Tweets about \"#яндекс\"</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>\n </div>\n\n        <p>Приём заявок на поступление закончен. По результатам теста мы пригласим в Школу 30-40 человек.</p>\n\n        <h3>Структура школы</h3>\n\n        <p><strong>Теоретический этап</strong></p>\n\n        <p>Первый этап обучения представляет собой курс лекций, посвящённых различным сторонам фронтенд-разработки.\n            С программой прошлого года вы можете ознакомиться на <a\n                    href=\"http://events.yandex.ru/events/shri/msk-2012/programm/\">этой</a> странице.\n            Лекции начнутся 7 сентября и будут продолжаться в течение месяца. В конце курса слушателям предстоит\n            экзамен.\n            Лучшим студентам мы предложим пройти практический этап Школы. </p>\n\n        <p><strong>Практический этап</strong></p>\n\n        <p>Практика — это отличный шанс увидеть работу Яндекса изнутри. Практиканты получат корпоративные\n            компьютеры, пропуски в офис, а ещё мы будем платить им стипендию.\n            С середины октября до середины декабря практикантам предстоит выполнить большое задание под руководством\n            опытного разработчика. Также во время практики будут продолжаться лекции.</p>\n\n        <p>Тех, кто успешно пройдёт практику, мы с удовольствием пригласим к нам на работу или стажировку.</p>\n\n        <p>Все вопросы о Школе присылайте на адрес: <a href=\"mailto:intern@yandex-team.ru\"\n                                                       title=\"intern@yandex-team.ru\">intern@yandex-team.ru</a></p>\n\n    </div>";
  });

this["templates"]["lecturebig"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"b-page-lecture-big__video\">\n                <iframe src=\"";
  if (stack1 = helpers.video_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" frameborder=\"0\" width=\"515\" height=\"290\"></iframe>\n            </div>\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"b-page-lecture-big__slides\">\n                <iframe src=\"";
  if (stack1 = helpers.slides_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slides_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" frameborder=\"0\" width=\"348\" height=\"290\"></iframe>\n            </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"b-page-lecture-big\">\n        <div class=\"link-to-all\">\n            <a href=\"#!/lectures\">&larr; все лекции</a>\n        </div>\n        <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n        <div class=\"b-page-lecture-big__wrapper\">\n            ";
  stack1 = helpers['if'].call(depth0, depth0.video_url, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.slides_url, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <h3>Комментарии</h3>\n\n        <div class=\"b-page-lecture-big__comments\">\n        </div>\n        <form class=\"b-page-lecture-big__commentsForm\">\n            <div class=\"b-page-lecture-big__commentsForm_line\">\n                <input type=\"text\" name=\"name\" class=\"b-inp\" placeholder=\"введите имя\"/>\n            </div>\n            <div class=\"b-page-lecture-big__commentsForm_line\">\n                <textarea cols=\"30\" rows=\"10\" name=\"text\" class=\"b-inp\" placeholder=\"введите сообщение\"></textarea>\n            </div>\n            <button class=\"b-button\">\n                отправить\n            </button>\n        </form>\n    </div>";
  return buffer;
  });

this["templates"]["student"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            г. ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"b-soc-links__vk\"><a href=\"";
  if (stack1 = helpers.link_vk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_vk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">VK</a></li>\n            ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"b-soc-links__git\"><a href=\"";
  if (stack1 = helpers.link_gihub) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_gihub; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">git</a></li>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"b-soc-links__fb\"><a href=\"";
  if (stack1 = helpers.link_facebook) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_facebook; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">fb</a></li>\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li class=\"b-soc-links__ya\"><a href=\"";
  if (stack1 = helpers.link_yaru) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_yaru; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">yandex</a></li>\n            ";
  return buffer;
  }

  buffer += "<div class=\"b-student__avatar\">\n        <img src=\"";
  if (stack1 = helpers.link_photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" alt=\"\"/>\n    </div>\n    <div class=\"b-student__info\">\n        <div class=\"b-student__info_text\">\n            <a href=\"#!/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </div>\n        <div class=\"b-student__info_city\">\n            ";
  stack1 = helpers['if'].call(depth0, depth0.city, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <ul class=\"b-soc-links\">\n            ";
  stack1 = helpers['if'].call(depth0, depth0.link_vk, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.link_gihub, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.link_facebook, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, depth0.link_yaru, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    </div>\n    <span class=\"close\">×</span>";
  return buffer;
  });

this["templates"]["studentbig"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    г. ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"b-soc-links__vk\"><a href=\"";
  if (stack1 = helpers.link_vk) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_vk; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">VK</a></li>\n                    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"b-soc-links__git\"><a href=\"";
  if (stack1 = helpers.link_gihub) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_gihub; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">git</a></li>\n                    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"b-soc-links__fb\"><a href=\"";
  if (stack1 = helpers.link_facebook) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_facebook; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">fb</a></li>\n                    ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <li class=\"b-soc-links__ya\"><a href=\"";
  if (stack1 = helpers.link_yaru) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_yaru; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">yandex</a></li>\n                    ";
  return buffer;
  }

  buffer += "<div class=\"b-page-student-big\">\n        <div class=\"b-student__control\">\n            <span class=\"b-button editStudent\">Править</span>\n        </div>\n        <div class=\"link-to-all\">\n            <a href=\"#!/students\">&larr; все студенты</a>\n        </div>\n        <div class=\"b-page-student-big__wrapper\">\n            <div class=\"b-page-student-big__avatar\">\n                <a href=\"";
  if (stack1 = helpers.link_photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\"><img src=\"";
  if (stack1 = helpers.link_photo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.link_photo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\"/></a>\n            </div>\n            <div class=\"b-page-student-big__text\">\n                <h2 class=\"b-page-student-big__header\">";
  if (stack1 = helpers.first_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.first_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.last_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.last_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n                <div class=\"b-page-student-big__city\">\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.city, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                ";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                <ul class=\"b-soc-links\">\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.link_vk, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.link_gihub, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.link_facebook, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.link_yaru, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n\n    </div>";
  return buffer;
  });