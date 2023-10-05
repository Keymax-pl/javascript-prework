{
function playGame(playerInput){
	clearMessages();

	function printMessage(msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

		const randomNumber = Math.floor(Math.random() * 3 + 1);{

		console.log('Wylosowana liczba to: ' + randomNumber);
		}
		
	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		}
		if(argMoveId == 2){
		return 'papier';
		}
		if(argMoveId == 3){
		return 'nożyce';
		}
		
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove){
		console.log('moves:', argComputerMove, argPlayerMove);
		console.log('Wywyołanie Funkcji');

		printMessage('Wybrałem: ' + argPlayerMove + ' , ' + ' PC wybrało:' + argComputerMove);

		if( argComputerMove == argPlayerMove){
			printMessage('Remis');
		}
		else if (
			(argComputerMove == 'kamień' && argPlayerMove =='papier') ||
			(argComputerMove == 'papier' && argPlayerMove =='nożyce') ||
			(argComputerMove == 'nożyce' && argPlayerMove =='kamień')
		){
			printMessage('Wygrałeś');
		}	
		else{
			printMessage('Przegrałeś');
		}
	}

		const argComputerMove = getMoveName(randomNumber);{
	
		console.log('Gracz wpisał: ' + playerInput);
		}

		const argPlayerMove = getMoveName(playerInput);{

		}

		displayResult(argComputerMove, argPlayerMove);

		

}

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
}