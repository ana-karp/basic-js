module.exports = function createDreamTeam(members) {
  let teamName = '';
  for(let member of members.sort()) {
    if(typeof member === 'string') {
      teamName += member[0];
    }
  }
  console.log(teamName);
  return teamName ? teamName.toUpperCase() : false;
};

