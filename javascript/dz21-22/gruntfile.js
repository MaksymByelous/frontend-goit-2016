module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig ({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js/src',
                    src: ['*.js'],
                    dest: 'js/dist',
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },
        concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['js/dist/*.js'],
            dest: 'js/script.main.min.js'
          }
        },
        uglify: {
          dist:{
          src: ['js/script.main.min.js'],
          dest: 'js/script.main.min.js'
          }
        },
        watch: {
            babel: {
                files:'js/src/*.js',
                tasks: ['babel']
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['babel', 'concat', 'uglify']);
};
