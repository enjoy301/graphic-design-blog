import styled from "styled-components";
import Thumbnail from "../components/thumbnail";

const StyledHomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-auto-columns: 50% 50%;
  grid-auto-rows: 50% 50%;
`;

export default function Home() {
  return (
    <StyledHomeWrapper>
      <Thumbnail
        to="/"
        imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
        title="원투쓰리포파입싯스"
        subtitle="나~~인텐! 딱 10cm만"
      />
      <Thumbnail
        to="/"
        imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
        title="원투쓰리포파입싯스"
        subtitle="나~~인텐! 딱 10cm만"
      />
      <Thumbnail
        to="/"
        imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
        title="원투쓰리포파입싯스"
        subtitle="나~~인텐! 딱 10cm만"
      />
      <Thumbnail
        to="/"
        imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
        title="원투쓰리포파입싯스"
        subtitle="나~~인텐! 딱 10cm만"
      />
      <Thumbnail
        to="/"
        imageUrl="https://img.freepik.com/premium-vector/summer-seascape-beach-and-ocean-illustration_71599-2676.jpg"
        title="원투쓰리포파입싯스"
        subtitle="나~~인텐! 딱 10cm만"
      />
    </StyledHomeWrapper>
  );
}
