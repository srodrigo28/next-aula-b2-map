import Pagina from "./Pagina";

export default function Layout(props: any){
  return (
      <Pagina>
        {props.children}
      </Pagina>
  );
}
