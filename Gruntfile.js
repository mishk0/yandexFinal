
module.exports = function(grunt) {

  grunt.initConfig({


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
    
    },
    single_file: {
      options: {
        
      },
      src: 'css/style.css',
      dest: 'css/style.css'
    }
  },
  uglify: {
        files: { 
            src: 'js/**/*.js', 
            dest: '',
            expand: true,
            flatten: false, 
            ext: '.js'
        }
    },  
    concat: {},

    watch: {
    files: ['css/*.less'],
    tasks: ['less','autoprefixer']
},
handlebars: {
                compile: {
                    files: {
                        'js/templates.js': "templates/*.hbs"
                    },
                    options: {
                        wrapped: true,
                        amd: true,
                        namespace: 'templates',
                        processName: function(filePath) {
                            var parts = filePath.split('/');
                            return parts[parts.length - 1].split('.')[0];
                        }
                    }
                }

            }

  });

  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['less']);
};