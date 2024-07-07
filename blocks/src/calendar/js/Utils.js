const formatDate = (date) => {
	let formattedDate = new Date( date );

	return `${formattedDate.getFullYear()}-${formattedDate.getMonth() + 1}-${formattedDate.getDate()}T${formattedDate.getHours()}:${formattedDate.getMinutes()}:${formattedDate.getSeconds()}`
}

export { formatDate };