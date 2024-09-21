interface Props {
  name: string;
  lastname: string;
}
export default function Heading(props: Props) {
  return (
    <div>
      <h1>{`Name: ${props.name} LastName: ${props.lastname}`}</h1>
    </div>
  );
}
