(function (angular) {
  "use strict";
  angular.module('app').factory('TeamService', TeamService);

  TeamService.$inject = [];

  function TeamService() {

    var directors = [
      { name: 'Diane Francis',
        position:'Author, Professional Corporate Director, Professor, Entrepreneur, expert on Silicon Valley, future technology',
        image: 'fransis.jpg'
      },
      { name: 'Jason Mitura',
        position:'Serial Venture Capitalist, Viewdle',
        image: 'jason.jpg'
      },
      { name: 'Kira	Rudik',
        position:'Management and Operations',
        image: 'kira.jpg'
      },
      { name: 'Vsevolod Dyomkin',
        position:'World-Class researcher, Kyiv Polytechnic lecturer, 5 years NLP with Grammarly',
        image: 'dyomkin.jpg'
      }
    ];
    var team = [
        {name: 'Taras', position:'Researcher', image: 'taras-sereda-0006.jpg'},
        {name: 'Aleksandr', position:'Full Stack Developer', image: 'alex-lapshyn.jpg'}
      ];

    return {
      team: team,
      directors: directors
    };
  }
})(angular);
