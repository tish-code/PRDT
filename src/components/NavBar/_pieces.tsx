import { Link } from "react-router-dom";

export function sign_up(props: { styles: string }) {
  return (
    <button className={props.styles}>
      <Link to="/sign-in">Sign up</Link>
    </button>
  );
}

export function sign_in(props: { styles: string }) {
  return (
    <button className={props.styles}>
      <Link to="/sign-in">Sign up</Link>
    </button>
  );
}

export function logo(props: { styles: string }) {
  return (
    <div className={props.styles}>
      <Link to="/">PRDT</Link>
    </div>
  );
}
