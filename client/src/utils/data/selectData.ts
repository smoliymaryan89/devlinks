interface Option {
  value: string;
  label: string;
  iconName: string;
  color: string;
}

const options: Option[] = [
  {
    value: "github",
    label: "GitHub",
    iconName: "icon-github",
    color: "#1A1A1A",
  },
  {
    value: "twitter",
    label: "Twitter",
    iconName: "icon-twitter",
    color: "#43B7E9",
  },
  {
    value: "linkedin",
    label: "LinkedIn",
    iconName: "icon-linkedin",
    color: "#2D68FF",
  },
  {
    value: "youtube",
    label: "YouTube",
    iconName: "icon-youtube",
    color: "#EE3939",
  },
  {
    value: "facebook",
    label: "Facebook",
    iconName: "icon-facebook",
    color: "#2442AC",
  },
  {
    value: "twitch",
    label: "Twitch",
    iconName: "icon-twitch",
    color: "#EE3FC8",
  },
  {
    value: "codewars",
    label: "Codewars",
    iconName: "icon-codewars",
    color: "#8A1A50",
  },
  {
    value: "freecodecamp",
    label: "freeCodeCamp",
    iconName: "icon-freecodecamp",
    color: "#302267",
  },
  {
    value: "gitlab",
    label: "GitLab",
    iconName: "icon-gitlab",
    color: "#EB4925",
  },
  {
    value: "hashnode",
    label: "Hashnode",
    iconName: "icon-hashnode",
    color: "#0330D1",
  },
  {
    value: "stackoverflow",
    label: "Stack Overflow",
    iconName: "icon-stack-overflow",
    color: "#EC7100",
  },
];

export default options;
