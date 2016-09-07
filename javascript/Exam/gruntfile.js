module.exports = function(grunt) {

  grunt.initConfig({
//---------------------work with css files
    sass: {
        dist: {
          files: [{
            expand: true,
            cwd: 'src/styles',
            src: ['main.scss'],
            dest: 'src/styles',
            ext: '.min.css'
          }]
        }
      },
    concat_css: {
      options: {
        separator: ''
      },
      dist: {
        src: ['src/styles/src/variables.scss',
        'src/styles/src/mixins.scss',
        'src/styles/src/reset.scss',
        'src/styles/src/styles.scss'],
        dest: 'src/styles/main.scss'
       }
      },
      cssmin: {
        dist: {
            src: ['src/styles/main.min.css'],
            dest: 'build/styles/main.min.css'
        }
      },
// -----------work with js files
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/src/*.js'],
        dest: 'src/js/script.main.min.js'
       }
      },
    uglify: {
      dist: {
          src: ['src/js/script.main.min.js'],
          dest: 'build/js/script.main.min.js'
      }
    },
//-------eye of saruman
    watch: {
      sass: {
        files: ['src/styles/src/*.scss'],
        tasks: ['concat_css', 'sass', 'cssmin'],
      },
      js: {
        files: ['src/js/src/*.js'],
        tasks: ['concat', 'uglify'],
      }
    },
// for minimize images!!!!!!!!!
    imagemin: {
      options: {
        cache: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/img'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat_css', 'sass', 'cssmin', 'concat', 'uglify', 'imagemin', 'watch']);
};
