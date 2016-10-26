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
        src: ['src/styles/src/variables.scss', 'src/styles/src/reset.scss',
        'src/styles/src/bootstrap.scss', 'src/styles/src/jcarousel.scss',
        'src/styles/src/jssocials.scss', 'src/styles/src/jssocials-theme-flat.scss',
        'src/styles/src/searchMeme.scss',
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
        tasks: ['concat_css', 'sass', 'autoprefixer','cssmin'],
      },
      js: {
        files: ['src/js/src/*.js'],
        tasks: ['concat', 'uglify'],
      }
    },
//--------sync for testing
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'build/js/*.js',
                        'build/styles/*.css',
                        'build/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './build'
                }
            }
        },
//---add vendor prefixes
    autoprefixer: {
      dist: {
        src: ['src/styles/main.min.css'],
        dest: 'src/styles/main.min.css'
      },
        options: {
          browsers: ['last 10 versions', 'ie 8', 'ie 9', '> 1%']
        }
    }
  });

  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['concat_css', 'sass', 'autoprefixer','cssmin',
  'concat', 'uglify', 'browserSync', 'watch']);
};
