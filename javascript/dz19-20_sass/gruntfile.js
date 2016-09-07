module.exports = function(grunt) {

  grunt.initConfig({
//---------------------work with css files
    sass: {
        dist: {
          files: [{
            expand: true,
            cwd: 'styles',
            src: ['main.scss'],
            dest: 'styles',
            ext: '.css'
          }]
        }
      },
    concat_css: {
      options: {
        separator: ''
      },
      dist: {
        src: ['styles/src/variables.scss', 'styles/src/reset.scss',
        'styles/src/styles.scss', 'styles/src/styles-carousel.scss',
        'jquery.akordeon.scss'],
        dest: 'styles/main.scss'
       }
      },
// -----------work with js files
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
//-------eye of saruman
    watch: {
      sass: {
        files: ['styles/src/*.scss'],
        tasks: ['concat_css', 'sass'],
      },
      js: {
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat_css', 'sass',  'concat', 'uglify', 'watch']);
};
