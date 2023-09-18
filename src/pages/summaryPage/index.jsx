import Container from "../../components/container";
import { SpendsResume } from "../../components/spendsResume";

export function SummaryPage(){
    return(
        <Container customClass="container summary_container">
            <SpendsResume />
        </Container>
    )
}
