/**
 * calendarDemoApp - 0.9.0
 */
var calendarDemoApp = angular.module('calendarDemoApp', ['ui.calendar', 'ui.bootstrap']);

calendarDemoApp.controller('CalendarCtrl',
   function($scope, $compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'Team 1',start: new Date(2015, 10, 1,10, 50),end: new Date(2015, 10,1 ,13,30)},
      {title: 'Team 2',start: new Date(2015,10,7, 12, 30),end: new Date(2015, 10,7 ,13,30)},
      {title: 'Team 1',start: new Date(2015, 10,  10, 19, 0),end: new Date(2015, 10,10, 19, 30)},
      {title: 'Team 2',start: new Date(2015, 10, 28,16, 15),end: new Date(2015, 10, 28, 16, 45)}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: ' ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };
    
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Enter team name here',
        start: new Date(y, m, d+1),
        end: new Date(y, m, d+1),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      $timeout(function() {
        if(uiCalendarConfig.calendars[calendar]){
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
      });
    };
  
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 500,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today,next'
        },
        eventRender: $scope.eventRender
      }
    };
	
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
	
});
/* EOF */
