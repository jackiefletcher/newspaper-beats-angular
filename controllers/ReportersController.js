newspaperBeats.controller('ReportersCtrl', function ReportersCtrl($scope, $state, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName,
                                  birthdate: $scope.birthdate,
                                  yearsEmployed: $scope.yearsEmployed
                                });

    $scope.reporterName = null;
    $scope.birthdate = null;
    $scope.yearsEmployed = null;

    $state.go('home');

  }
});
