import { GetStarted, ButtonRegular } from "./button.styles";

const Button = ({ children, regular }) => {
    const Actionable = regular ? ButtonRegular : GetStarted;

    return (
        <Actionable regular={regular}>{children}</Actionable>
    );
}

export default Button;
