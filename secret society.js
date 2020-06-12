function societyName(friends) {
	return friends.sort().map((abs)=> abs[0]).join('')
}