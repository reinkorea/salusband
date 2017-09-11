(function() {
    'use strict';

    angular
        .module('artbakeApp')
        .controller('TaskMySuffixController', TaskMySuffixController);

    TaskMySuffixController.$inject = ['Task', 'TaskSearch'];

    function TaskMySuffixController(Task, TaskSearch) {

        var vm = this;

        vm.tasks = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Task.query(function(result) {
                vm.tasks = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            TaskSearch.query({query: vm.searchQuery}, function(result) {
                vm.tasks = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
