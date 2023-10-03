function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

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

	let argComputerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
	computerMove = 'papier';
}

else if(randomNumber == 3){
	computerMove = 'nożyce';
}
*/

	let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

	console.log('Gracz wpisał: ' + playerInput);

	let argPlayerMove = getMoveName(playerInput);

	displayResult(argComputerMove, argPlayerMove);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
  playerMove = 'papier';
}

else if(playerInput == '3'){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}

else if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
}

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
}

else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Ty przegrywasz!');
}

else if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Ty przegrywasz!');
}

else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Ty przegrywasz!');
}

else if( computerMove == playerMove){
	printMessage('remis');
}

else if ( playerMove == 4,5,6,7,8,9){
	printMessage('błąd, wybierz numer od 1 do 3');
}
*/