interface NavLink {
  title: string;
  path: string;
  icon: string;
}

const navLinks: NavLink[] = [
  {
    title: "Links",
    path: "/",
    icon: "icon-link",
  },
  {
    title: "Profile Details",
    path: "/profile",
    icon: "icon-profile",
  },
];

export default navLinks;
