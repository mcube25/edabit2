function chatroomStatus(users) {
	if (users.length === 0){return "no one online"}
	if (users.length == 1){return  users[0]+ " " +"online"}
	else if (users.length == 2){return users[0]+ " "+"and"+" "+users[1]+" "+ "online"}
	else {return  users[0]+ ","+" "+users[1]+" " + "and" +
		" "+ users.splice(2).length + " " + 
		"more online"}
}