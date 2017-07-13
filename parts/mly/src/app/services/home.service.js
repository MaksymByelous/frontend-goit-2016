(function (angular) {
  "use strict";
  angular.module('app').factory('HomeService', HomeService);

  HomeService.$inject = [];

  function HomeService() {

    var news = [
        {
          title: 'Partnership for future without lie',
          titleFoto:'/img/news/news3-title.jpg',
          description: "Award-winning investigative journalist Diane Francis with Kira Rudik, Verified, Management and Operations, united their common forces to develop a project...",
          detailedDescription: {
            paragraph1: "Award-winning investigative journalist Diane Francis with Kira Rudik, Verified, Management and Operations, united their common forces to develop a project aimed to help people to find true statements in our fast-changing information society.",
            paragraph2: "It will be a real-time fact checking tool verifying statement and then receiving a rating about the accuracy of this ‘fact.’ Fact checking enables us to sort through a tidal wave of massive information and communication."
          },
          day: '',
          month: 'June',
          year: '2017',
          image: '/img/news/news3.jpg'
        },
        {
          title: 'Vsevolod Dyomkin about Verified Prototype',
          titleFoto:'/img/news/news2-title.jpg',
          description: "Verified is a prototype of the program that can determine whether the news is true or fake. The program checks the text for inconsistencies. The question is...",
          detailedDescription: {
            paragraph1: "Verified is a prototype of the program that can determine whether the news is true or fake. The program checks the text for inconsistencies. The question is “How the program works?”. There is a special field to enter the text: claims or quotes. After entering, the prototype compares it with other web sources.",
            paragraph2: "The program analyses data and finds confirmation or refutation. As the result, we get information that can confirm or refute this claim. If the result was not found, the claim is not confirmed. Verified goal is to help our society to identify the fake news and find the truth."
          },
          day: '',
          month: 'May',
          year: '2017',
          image: '/img/news/news2.jpg'
        },
        {
          title: 'The meet-up “Features and models of NLP"',
          titleFoto:'/img/news/news1-title.jpg',
          description: "The meet-up 'What features and models do work in NLP and why' was held on February, 10 by Vsevolod Dyomkin, Lisp Engineer, independent developer and expert in NLP.",
          detailedDescription: {
            paragraph1: "The meet-up 'What features and models do work in NLP and why' was held on February, 10 by Vsevolod Dyomkin, Lisp Engineer, independent developer and expert in NLP.",
            paragraph2: "Vsevolod spoke about linear models, random forest, RNN, morphological features, 1-hot encoding and word-embeddings. Meet-up was intended on audience with good experience in ML, who wanted to learn new information."
          },
          day: '10',
          month: 'February',
          year: '2017',
          image: '/img/news/news1.jpg'
        }
      ];

  return {
    news: news
  };
}
})
(angular);
