module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/script.main.min.js'
       }
      },
    uglify: {
      dist: {
          src: ['js/script.main.min.js'],
          dest: 'js/script.main.min.js'
      }
    },
    concat_css: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/styles.main.min.css'
       }
      },
    cssmin: {
      dist: {
          src: ['css/styles.main.min.css'],
          dest: 'css/styles.main.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};
