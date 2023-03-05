function SecondComponent(props) {
    const { parentName } = props
    return (
        <div>
            <h2>
                My Second Component
            </h2>
            <h2>Parent Component is {parentName}</h2>
        </div>
    );
}

export default SecondComponent;