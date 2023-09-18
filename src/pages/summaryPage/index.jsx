import Container from "../../components/container";
import { SpendsResume } from "../../components/spendsResume";
import { useParams } from "react-router-dom";

export function SummaryPage(){
  let { id } = useParams();
  //console.log("idSumary", id);
    return(
        <Container customClass="container summary_container">
            <SpendsResume />
        </Container>
    )
}
