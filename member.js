function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS'];
    var member = {
        skills: skills,
        addSkill: function(skill) {
            this.skills.push(skill);
        }
    }
    return member;
}