/**
 * Application configuration
 */
angular
    .module('config', [])
    .config(function ($provide) {
        $provide.constant('REPOSITORY_NAME', 'briteming/blogit')
        $provide.constant('DEBUG_ENABLED', true)
        $provide.constant('POST_REQUIRED_TAGS', ['published'])
    })
;
