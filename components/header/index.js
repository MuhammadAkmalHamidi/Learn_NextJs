import { withAuth } from "../with-auth";

function Header({handleNumber, number}) {
  return (
    <div>
      <div>
        {number}
      </div>
      <div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <button onClick={handleNumber}>Increment</button>
    </div>
  );
}

export default withAuth(Header);
