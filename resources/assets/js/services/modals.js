(function() {

	angular
		.module('BuscaAtivaEscolar')
		.factory('Modals', function($q, $uibModal) {

			return {

				show: function(params) {

					var def = $q.defer();

					var instance = $uibModal.open(params);

					instance.result.then(function (data) {
						def.resolve(data.response);
					}, function (data) {
						def.reject(data);
					});

					return def.promise;
				},


				Alert: function(message, details) {
					return {
						templateUrl: '/modals/alert.html',
						controller: 'AlertModalCtrl',
						size: 'sm',
						resolve: {
							message: function() { return message; },
							details: function() { return details; }
						}
					};
				},

				Confirm: function(message, details, canDismiss) {
					var params = {
						templateUrl: '/modals/confirm.html',
						controller: 'ConfirmModalCtrl',
						size: 'sm',
						resolve: {
							message: function() { return message; },
							details: function() { return details; },
							canDismiss: function() { return canDismiss; }
						}
					};

					if (!canDismiss) {
						params.keyboard = false;
						params.backdrop = 'static';
					}

					return params;
				},

				Prompt: function(question, defaultAnswer, canDismiss) {
					var params = {
						templateUrl: '/modals/prompt.html',
						controller: 'PromptModalCtrl',
						size: 'md',
						resolve: {
							question: function() { return question; },
							defaultAnswer: function() { return defaultAnswer; },
							canDismiss: function() { return canDismiss; }
						}
					};

					if (!canDismiss) {
						params.keyboard = false;
						params.backdrop = 'static';
					}

					return params;
				}

			}
		});
})();