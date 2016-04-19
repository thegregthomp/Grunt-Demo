'use strict';
// Project configuration
module.exports = function(grunt) {
	grunt.initConfig({
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: { // Dictionary of files
					'pub/css/c.css': 'src/sass/c.scss'
				}
			},
		},
		php: {
			dist: {
				options: {
					port: 8888,
					base: 'pub',
					hostname: 'localhost',
					keepalive: false,
					open: false
				}
			}
		},
		watch: {
			options: {
				spawn: false // Very important, don't miss this
			},
			sass: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass'],
				options: {

				},
			},
		},
		wiredep: {
            dev: {
                src: [
                    'pub/**/*.*',
                ],
                // options: {
                //     ignorePath: '../../../public',
                // }
            },
        },
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'pub/css/**/*.css',
					]
				},
				options: {
					watchTask: true,
				}
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wiredep');


	grunt.registerTask('default', [
		'sass',
		'php',
		'wiredep',
		'browserSync',
		'watch'
	]);
};