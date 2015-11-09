var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [{
        header: 'Learn React',
        description: 'React is fantastic new library for making fast, dynamic web pages. React is fantastic new library for making fast, dynamic web pages.',
        imageURL: 'https://github.com/facebook/react/wiki/react-logo-1000-transparent.png',
        title: 'See tutorials',
        number: 12
    }, {
        header: 'Learn Gulp',
        description: 'Gulp will speed up your workflow. Gulp will speed up your workflow. Gulp will speed up your workflow.',
        imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
        title: 'Show Courses',
        number: 25
    }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.target')); // (instance, target)
