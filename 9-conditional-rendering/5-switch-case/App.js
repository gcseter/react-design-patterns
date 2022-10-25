const App = ({ role }) => {
    switch (role) {
      case "author":
        return <AuthorLayout> Let's write something </AuthorLayout>;
      case "admin":
        return <AdminLayout> Here are the latest reports </AdminLayout>;
      case "moderator":
        return <ModeratorLayout> These are the ongoing events </ModeratorLayout>;
      default:
        return <GuestLayout>Your current feed</GuestLayout>;
    }
  }

  export default App