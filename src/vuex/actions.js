export function increment({
	commit
}) {
	commit('increment')
}

export function decrement({
	commit
}) {
	commit('decrement')
}



export function incrementIfOdd({
	commit,
	state
}) {
	if ((state.count + 1) % 2 === 0) {
		commit('increment')
	}
}

export function incrementAsync({
	commit
}) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			commit('increment')
			resolve()
		}, 1000)
	})
}