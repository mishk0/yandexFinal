//Стандартный экспорт модуля в nodejs
module.exports = function(grunt) {
  // Инициализация конфига GruntJS
  grunt.initConfig({

    //Настройки различных модулей GruntJS, их нужно предварительно установить через менеджер пакетов npm, или добавить в файл package.json перед запуском npm install

    //Например проверка кода javascript с помощью утилиты jshint
    jshint: {
      files: ['*.js']
    },
    less: {
    development: {
    files: {
      "css/style.css": "css/style.less"
    }
  }

    },
autoprefixer: {
    options: {
      // Task-specific options go here.
    },
    single_file: {
      options: {
        // Target-specific options go here.
      },
      src: 'css/style.css',
      dest: 'css/style.css'
    }
  },
    //Склеивание файлов
    concat: {},

    watch: {
    files: ['css/*.less'],
    tasks: ['less','autoprefixer']
}
    //И так далее
  });

  //Загрузка модулей, которые предварительно установлены
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['less']);
};