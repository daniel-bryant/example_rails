// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function addPeople(people) {
  for (var i = 0; i < people.length; i++) {
    const peopleDiv = document.getElementById('people')
    const personDiv = document.createElement('div')
    personDiv.innerHTML = people[i].Name
    peopleDiv.append(personDiv)
  }
}

function addCompanies(companies) {
  for (var i = 0; i < companies.length; i++) {
    const parentDiv = document.getElementById('companies')
    const companyDiv = document.createElement('div')
    companyDiv.innerHTML = companies[i].name + " - " + companies[i].city
    parentDiv.append(companyDiv)
  }
}

window.onload = function() {
  fetch('http://localhost:3001/people')
  .then(response => response.json())
  .then(json => addPeople(json));

  fetch('http://localhost:3002/companies')
  .then(response => response.json())
  .then(json => addCompanies(json));
}
