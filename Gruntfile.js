module.exports = function (grunt) {

	"use strict";

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		assetsDir: 'app',
		distDir: 'dist',

		availabletasks: {
			tasks: {
				options: {
					filter: 'include',
					groups: {
						'Development': ['dev'],
						'Production': ['package'],
						'Continuous Integration': ['ci']
					},
					sort: ['dev', 'test:unit', 'test:e2e', 'report', 'package', 'ci'],
					descriptions: {
						'dev': 'Launch the static server and watch tasks',
						'package': 'Package your web app for distribution',
						'ci': 'Run unit & e2e tests, package your webapp and generate reports. Use this task for Continuous Integration'
					},
					tasks: ['dev', 'package', 'ci']
				}
			}
		},
		bowerInstall: {
			target: {
				src: '<%= assetsDir %>/index.html',
				ignorePath: '<%= assetsDir %>/',
				jsPattern: '<script type="text/javascript" src="{{filePath}}"></script>',
				cssPattern: '<link rel="stylesheet" href="{{filePath}}" >'
			}
		},
		clean: {
			dist: ['.tmp', '<%= distDir %>']
		},
		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: '<%= assetsDir %>',
						dest: '<%= distDir %>/',
						src: [
							'index.html',
							'img/**',
							'fonts/**',
							'**/*.html'
						]
					}
				]
			}
		},
		ngmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '.tmp/concat/js',
						src: '*.js',
						dest: '.tmp/concat/js'
					}
				]
			}
		},
		useminPrepare: {
			html: '<%= assetsDir %>/index.html',
			options: {
				dest: '<%= distDir %>'
			}
		},
		usemin: {
			html: '<%= distDir %>/index.html'
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'<%= assetsDir %>/**/*.html',
						'<%= assetsDir %>/**/*.js',
						'<%= assetsDir %>/**/*.css'
					]
				},
				options: {
					watchTask: true,
					ghostMode: {
						clicks: true,
						scroll: true,
						links: false, // must be false to avoid interfering with angular routing
						forms: true
					},
					server: {
						baseDir: "<%= assetsDir %>"
					}
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: {
				src: ['<%= assetsDir %>/js/**/*.js']
			}
		},
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			all: {
				src: ['<%= assetsDir %>/css/**/*.css']
			}
		},
		watch: {
			options: {
				interrupt: true
			},
			js: {
				files: ['<%= assetsDir %>/js/**/*.js'],
				tasks: ['newer:jshint']
			},
			html: {
				files: ['<%= assetsDir %>/**/*.html']
			},
			scss: {
				files: ['<%= assetsDir %>/scss/**/*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
			options: {
				style: 'expanded',
				trace: true
			},
			all: {
				files: {
					'<%= assetsDir %>/css/app.css': '<%= assetsDir %>/scss/app.scss'
				}
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= distDir %>/js/{,*/}*.js',
						'<%= distDir %>/css/{,*/}*.css'
					]
				}
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 7,
					progressive: false,
					interlaced: true
				},
				files: [
					{
						expand: true,
						cwd: '<%= assetsDir %>/',
						src: ['**/*.{png,jpg,gif}'],
						dest: '<%= distDir %>/'
					}
				]
			}
		}
	});

	grunt.registerTask('dev', ['sass', 'browserSync', 'watch']);
	grunt.registerTask('package', ['jshint', 'clean', 'useminPrepare', 'copy', 'concat', 'ngmin', 'uglify', 'sass', 'cssmin', 'rev', 'imagemin', 'usemin']);
	grunt.registerTask('ci', ['package']);
	grunt.registerTask('ls', ['availabletasks']);

};
