function InputGenerator({
    labelText,
    value,
    type,
    dataIndex,
    onChange
}) {
    return (
        <label>{labelText}
            <input type={type} value={value} data-index={dataIndex} onChange={onChange} />
        </label>
    )
}

export default InputGenerator;