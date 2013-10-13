require.config({
     paths:{
         'jquery': 'lib/jquery',
         'underscore': 'lib/underscore-min',
         'backbone': 'lib/backbone-min',
         'Store': 'lib/backbone.localStorage',
         'handlebars': 'lib/handlebars.runtime',
         'templates' : 'templates',
         'Controller' : 'router/router',
         'sc' : 'collections/students',
         'lc' : 'collections/lectures',
         'LecturesPage' : 'views/lectures',
         'StudentsPage' : 'views/students',
         'LectureBigPage' : 'views/biglectures',
         'StudentsBigPage' : 'views/bigstudents',
         'Student' : 'models/student',
         'Lecture' : 'models/lecture',
         'StudentView' : 'views/student',
         'common' : 'common',
         'modelJson' : '../data/students-data',
         'dialog' : 'dialog'
     },
     shim: {
         'jquery': {
             exports: '$'
         },
         'underscore': {
             exports: '_'
         },
         'backbone': { exports: 'Backbone', deps: ['underscore', 'jquery'] },
         'Store': { deps: ['backbone'] },
         'handlebars': { exports: 'Handlebars'}
     }
 });

 define("main",["jquery","backbone","Controller"],
     function($,Backbone,Controller) {
         "use strict";
         var controller = new Controller();
         Backbone.history.start();
 })