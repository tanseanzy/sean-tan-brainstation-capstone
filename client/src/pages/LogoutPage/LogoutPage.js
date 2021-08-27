import "./LogoutPage.scss";

export default function LogoutPage() {
  setTimeout(function () {
    window.location.href = "/";
  }, 3500);

  return (
    <div className="logout">
      <p> you've been succesfully logged out!</p>
      <p> thanks for stopping by ☺</p>
    </div>
  );
}
