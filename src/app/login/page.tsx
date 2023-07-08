import Input from "@/components/Input";

export default function Login() {
    return (
        <form>
            <Input type="text" id="email" placeholder="example@email.com" required={true} />
        </form>
    );
}
