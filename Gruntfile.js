module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/main.js', 'js/plugins.js'], //input
        dest: 'js/build/main.min.js' //output
      }
    },

    sass: {
      dist: {
        options:{
          style: 'compressed'
        },

        files: {
          'stylesheets/screen.css': 'sass/screen.scss'
        }
      }

    },

        watch: {

        css: {
          files: ['sass/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
        },

        scripts:  {

          files: ['js/*.js'],
          tasks: ['uglify'],
          options: {
            spawn: false,

        }

      }


    }

  }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('default', ['watch']);

};