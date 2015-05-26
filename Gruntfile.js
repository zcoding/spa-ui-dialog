module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        compress: {
          drop_console: true
        },
        mangle: {
          except: ['require', 'exports', 'module']
        },
        banner: '/* <%= pkg.name %> by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> version: <%= pkg.version %> */',
        sourceMap: true,
        sourceMapName: 'build/<%= pkg.name %>.min.map',
      },
      "build": {
        files: {
          "build/<%= pkg.name %>.min.js": ["<%= concat.build.dest %>"]
        }
      }
    },

    less: {
      "build": {
        files: {
          'build/<%= pkg.name %>.css': 'src/less/spa-ui-dialog.less'
        }
      }
    },

    concat: {
      options: {
        separator: '',
        banner: '/* <%= pkg.name %> by <%= pkg.author %>, <%= pkg.license %> license, <%= grunt.template.today("yyyy-mm-dd") %> version: <%= pkg.version %> */'
      },
      "build": {
        src: ['src/intro.js', 'src/utils.js', 'src/dialog.js', 'src/api.js', 'src/outro.js'],
        dest: 'build/<%= pkg.name %>.js'
      }
    },

    watch: {
      options: {
        spawn: false
      },
      "build": {
        files: ['src/*.js'],
        tasks: ['concat:build', 'uglify:build']
      },
      "skin": {
        files: ['src/**/*.less'],
        tasks: ['less:build']
      }
    },

    compress: {
      'release': {
        options: {
          archive: './release/<%= pkg.name %>-<%= pkg.version %>.zip',
        },
        files: [
          {src: ['src/**', 'build/**', 'package.json', 'README.md', 'Gruntfile.js']}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['concat:build', 'uglify:build', 'watch:build']);
  grunt.registerTask('skin', ['less:build', 'watch:skin']);
  grunt.registerTask('build', ['concat:build', 'uglify:build', 'less:build']);
  grunt.registerTask('release', ['concat:build', 'uglify:build', 'less:build', 'compress:release']);

};