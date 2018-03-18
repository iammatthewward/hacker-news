function applyProps(suppliedProps) {
    return function supplyComponent(component) {
        function renderWithProps(additionalProps) {
            return component({
                ...component.defaultProps,
                ...suppliedProps,
                ...additionalProps
            });
        }
        Object.defineProperty(
            renderWithProps,
            'name', { value: `applyProps: ${component.name}` }
        );
        return renderWithProps;
    };
}

export default applyProps;
