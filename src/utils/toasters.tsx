import toast from "react-hot-toast";

const style = { 
  background: "#42a5f5",
  color: "#fff"
}
const className = "font-medium"
const added = (title: string) =>
toast(`Beneficiary added! You're all set to donate to - ${title}`, {
  style: style, className: className
});

const alreadyAdded = () =>
toast(`Looks Like you've already added this beneficiary`, {
  style: style, className: className
});

const removed = () =>
toast(
  `Beneficiary removed successfully. You can always add them back later if needed.`,
  {
    style: style, className: className
  }
);

const removedAll = () =>
toast(
  `All selected beneficiaries cleared.`,
  {
    style: style, className: className
  }
);

export {added, alreadyAdded, removed, removedAll}