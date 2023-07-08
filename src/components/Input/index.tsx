import style from "./Input.module.css";

type Props = {
    type: string;
    id: string;
    placeholder: string;
    required: boolean;
};

export default function Input({
    type,
    id,
    placeholder,
    required = false,
}: Props) {
    return (
        <input
            type={type}
            id={id}
            className={style.input}
            placeholder={placeholder}
        />
    );
}
