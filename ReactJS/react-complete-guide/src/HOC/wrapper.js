const wrapper = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent {...props} />
        </div>
    )
}
// props={...props} means if we have props of name="Ali" age=22
// then ...props will distribute them into props.name and props.age
export default wrapper;