$(document).ready(function() {
			// Fonction pour envoyer un message
			$(".chat-form").submit(function(event) {
				event.preventDefault();
				var message = $(".chat-input").val();
				$.ajax({
					url: "../htbin/chatsend.py",
					method: "POST",
					data: {msg: message},
					dataType: "json",
					success: function(response) {
						if (response.num == 0) {
							$("#err").text(response.msg);		//reponse a l'envoye du message de part du serv
							$(".chat-input").val("");
						} else {
							$("#err").text(response.msg);		//en cas d'erreur on renvoye le message d'erreur
						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);				//si le server nous renvoye  rien
					}
				});
			});

			// Fonction pour récupérer les messages
			function getMessages() {
				$.ajax({
					url: "../htbin/chatget.py",
					method: "GET",
					dataType: "json",
					success: function(response) {
						$(".chat-messages").empty();		//pour pas remplire constament la chatbox avec les vieux messages
						$.each(response, function(index, message) {
							var formattedDate = message.date + " " + message.time;
							var formattedMessage = "[" + formattedDate + "] " + message.user + ": " + message.msg;
							$(".chat-messages").append("<li>" + formattedMessage + "</li>"); // on append le mess
						});
					},
					error: function(jqXHR, textStatus, errorThrown) {
						console.log(textStatus, errorThrown);			//en cas d'erreur de renvoye
					}
				});
			}

			// Appeler la fonction de récupération des messages toutes les 1 secondes
			setInterval(getMessages, 1000);
		});

