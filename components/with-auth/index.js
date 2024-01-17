export function withAuth(Component) {
  return function WithAuth(props) {
    const isLogin = true;

    if (!isLogin) {
      return <div>You Must Login!</div>;
    }

    return <Component {...props} />;
  };
}