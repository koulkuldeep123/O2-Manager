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
     $scope.roomOne = [
      {title: 'Team 1',start: new Date(2015, 10, 1,10, 50),end: new Date(2015, 10,1 ,13,30)},
      {title: 'Team 2',start: new Date(2015,10,7, 12, 30),end: new Date(2015, 10,7 ,13,30)},
      {title: 'Team 1',start: new Date(2015, 10,  10, 19, 0),end: new Date(2015, 10,10, 19, 30)},
      {title: 'Team 2',start: new Date(2015, 10, 28,16, 15),end: new Date(2015, 10, 28, 16, 45)}
    ];
    $scope.roomTwo = [
      {title: 'Team 1',start: new Date(2015, 10, 5,10, 50),end: new Date(2015, 10,1 ,13,30)},
      {title: 'Team 2',start: new Date(2015,10,9, 12, 30),end: new Date(2015, 10,7 ,13,30)},
      {title: 'Team 1',start: new Date(2015, 10,  15, 19, 0),end: new Date(2015, 10,10, 19, 30)},
      {title: 'Team 2',start: new Date(2015, 10, 17,16, 15),end: new Date(2015, 10, 28, 16, 45)}
    ];
   /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: ' ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    /* to switch json */
     $scope.events = $scope.roomOne;
    $scope.onUserSelect = onUserSelect;
    function onUserSelect(selectedMeetingRoom){
    if(selectedMeetingRoom=='roomOne'){
      $scope.events = $scope.roomOne;
      $scope.renderCalender();}
  else if(selectedMeetingRoom=='roomTwo'){
      $scope.events = $scope.roomTwo;
      $scope.renderCalender();}
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

     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
                      'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: false,
        header:{
          left: 'today',
          center: 'title',
          right: 'prev, next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

});
/* EOF */

/*custom directive to book a meeting room*/

calendarDemoApp.directive("newentrydir", function(){
    return {
        restrict: "E",
        template: "<button type='button' class='btn btn-primary' addforms>Book a meeting Room</button>"
    }
});
/*custom directive to add a form on click*/
calendarDemoApp.directive("addforms", function($compile){
    return function(scope, element, attrs){
        element.bind("click", function(){
            angular.element(document.getElementById('new-entry-form')).append($compile("<form novalidate class='form-validation'><div><label for='team-name'>Enter Team name</label><input type='text' id='team-name' class='form-control' required><div><div><label for='event-date-start'>Select start date and time</label><input type='text' id='event-date-start' class='datetimepicker form-control' required><div><div><label for='event-date-end'>Select end date and time</label><input type='text' id='event-date-end' class='datetimepicker form-control' required><div><button type='button' class='btn btn-primary'>Submit</button><button type='reset' class='btn btn-primary'>Reset</button></form>")(scope));
        });
    };
});
