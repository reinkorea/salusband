(function() {
    'use strict';

    angular
        .module('artbakeApp')
        .factory('CountrySearch', CountrySearch);

    CountrySearch.$inject = ['$resource'];

    function CountrySearch($resource) {
        var resourceUrl =  'api/_search/countries/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
