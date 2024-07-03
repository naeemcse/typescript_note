// METHOD 01 :
//  dIRECTLY DEFINE THE TYPE OF PROPS IN THE FUNCTION
function MyButton({ title }: { title: string }) {
    return (
        <button>{title}</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" />
        </div>
    );
}

// METHOD 02 :
// DEFINE THE TYPE OF PROPS IN A SEPARATE INTERFACE
interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}

// METHOD 03 :  Assigning the type of the props of function
// Way :  01
const Select = ({
                    label,
                    value,
                    options,
                    onChange,
                }: {
    label: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

// way 02:
type Option = { label: string; value: string };

type Options = Option[];

const Select = ({
                    label,
                    value,
                    options,
                    onChange,
                }: {
    label: string;
    value: string;
    options: Options;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

// Way : 03 :

type Option = { label: string; value: string };

type Options = Option[];

type SelectProps = {
    label: string;
    value: string;
    options: Options;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ label, value, options, onChange }: SelectProps) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};


// way 04:
type Option = { label: string; value: string };

type Options = Option[];

type SelectProps = {
    label: string;
    value: string;
    options: Options;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({
                                           label,
                                           value,
                                           options,
                                           onChange,
                                       }) => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};

// way : 05
const Select: React.FC<SelectProps> = ({
                                           label,
                                           value,
                                           options,
                                           onChange,
                                       }): JSX.Element => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};



// METHOD 04 :
// USE THE `React.FC` TYPE
// React.FC is a generic type that accepts the props as a type argument
// React.FC stands for React Functional Component


// use of children type

const Select: React.FC<SelectProps> = ({
                                           label,
                                           value,
                                           options,
                                           onChange,
                                       }): JSX.Element => {
    return (
        <label>
            {label}
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
    );
};


