const wrapper = (WrapperComponent, className) => {
    return props => (
        <div className={className}>
            <WrapperComponent />
        </div>
    )
}
 
export default wrapper;