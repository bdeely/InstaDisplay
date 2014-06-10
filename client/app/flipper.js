
Router.map(function() {
  this.route('views_Flipper', {
    path: '/views/Flipper'
  });
});

// TODO, put flipper in it's own context
function perspectiveZero() {
    famousCmp.mainCtx.setPerspective(0);
}

Template.views_Flipper_front.events({
    'click': function(event, tpl) {
        var famousData = famousCmp.dataFromTemplate(tpl);
        famousCmp.mainCtx.setPerspective(500);
        famousData.parent.viewNode
            .setAngle(Math.PI, { curve : 'easeOutBounce', duration : 500},
                perspectiveZero);
    }
});

Template.views_Flipper_back.events({
    'click': function(event, tpl) {
        var famousData = famousCmp.dataFromTemplate(tpl);
        famousCmp.mainCtx.setPerspective(500);
        famousData.parent.viewNode
            .setAngle(0, { curve : 'easeOutBounce', duration : 500},
                perspectiveZero);
    }
});