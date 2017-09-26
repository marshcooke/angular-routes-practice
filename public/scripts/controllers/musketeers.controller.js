myApp.controller('MusketeersController', function(SkillsService) {
    console.log('in musketeers controller'); 
    var vm = this;
    vm.testSkills = SkillsService.testingSkills;    
 });