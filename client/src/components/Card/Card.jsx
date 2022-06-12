import { StyledCard } from "./Card.styled";

export default function Card(props) {
    return (
        <StyledCard>{props.children}</StyledCard>
    );
}