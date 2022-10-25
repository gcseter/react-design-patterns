export const printProps = Component => {
	return (props) => {
		return <Component {...props} />
	}
}