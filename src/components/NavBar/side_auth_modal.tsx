interface Props {
  open: Boolean;
}
function side_auth_modal({ open }: Props) {
  return <>{open && <div></div>}</>;
}

export default side_auth_modal;
