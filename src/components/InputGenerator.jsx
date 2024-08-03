function InputGenerator({
    labelText,
    value,
    type,
    placeholder,
    dataIndex,
    onChange,
    onFocusOut
}) {
    return (
        <label>{labelText}
            <input type={type} value={value} placeholder={placeholder} data-index={dataIndex} onChange={onChange} onBlur={onFocusOut} />
        </label>
    )
}

export default InputGenerator;