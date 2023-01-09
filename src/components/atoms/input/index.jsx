exports.Input = ({label, value, errors, onChange}) => {
    return (
        <div>
            <label htmlFor="email">{label}</label>
            <input
                onChange={onChange}
                value={value}
                error={errors}
                id="email"
                type="email"
                className={`border ${errors ? 'text-red-500 border-red-400' : 'border-green-500'}`}
            />
            <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
            </span>
        </div>
    )
}
